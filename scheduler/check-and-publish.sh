#!/bin/bash
# AIVoiceReview — Scheduled Blog Publisher
# Runs every 15 minutes via cron (*/15 * * * *).
# For each due draft: clones the repo fresh, runs the Claude publish workflow, pushes, then deletes the clone.

set -uo pipefail

LOCKFILE="/tmp/aivoicereview-publish.lock"
exec 9>"$LOCKFILE"
if ! flock -n 9; then
  echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] Already running — skipping this run."
  exit 0
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"
CLAUDE_BIN="/home/parryh/.nvm/versions/node/v20.20.2/bin/claude"
export PATH="/home/parryh/.nvm/versions/node/v20.20.2/bin:$PATH"
WORK_DIR="/home/parryh/aivoicereview-publish-work"
REPO_URL="git@github-aivoicereview:b4ked/aivoicereview.git"
API_URL="http://127.0.0.1:3004"
LOG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

if [ -f "$ENV_FILE" ]; then
  # shellcheck source=/dev/null
  source "$ENV_FILE"
fi

if [ -z "${VPS_API_KEY:-}" ]; then
  echo "[$LOG_DATE] ERROR: VPS_API_KEY not set in $ENV_FILE — exiting"
  exit 1
fi

if [ ! -x "$CLAUDE_BIN" ]; then
  echo "[$LOG_DATE] ERROR: claude not found at $CLAUDE_BIN"
  exit 1
fi

echo "[$LOG_DATE] Checking for due schedules..."

DUE_JSON=$(curl -sf \
  -H "Authorization: Bearer ${VPS_API_KEY}" \
  "${API_URL}/api/schedules/due" 2>&1) || {
  echo "[$LOG_DATE] ERROR: Could not reach scheduler API at ${API_URL}"
  exit 1
}

COUNT=$(echo "$DUE_JSON" | python3 -c "import sys,json; print(len(json.load(sys.stdin)))" 2>/dev/null || echo "0")
echo "[$LOG_DATE] Due drafts: $COUNT"

curl -sf -X POST \
  -H "Authorization: Bearer ${VPS_API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"result\":\"checking\",\"dueFound\":${COUNT}}" \
  "${API_URL}/api/status/ping" > /dev/null 2>&1 || true

if [ "$COUNT" -eq 0 ]; then
  echo "[$LOG_DATE] Nothing due. Exiting."
  exit 0
fi

echo "$DUE_JSON" | python3 -c "
import sys, json
data = json.load(sys.stdin)
for s in data:
    print(s['id'] + '|' + s['draftFile'] + '|' + s.get('draftTitle', s['draftFile']))
" | while IFS='|' read -r SCHEDULE_ID DRAFT_FILE DRAFT_TITLE; do

  LOG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  echo "[$LOG_DATE] ── Processing: $DRAFT_FILE"
  echo "[$LOG_DATE]    Title: $DRAFT_TITLE"
  echo "[$LOG_DATE]    Schedule ID: $SCHEDULE_ID"

  echo "[$LOG_DATE] Cloning fresh repo to $WORK_DIR..."
  rm -rf "$WORK_DIR"
  if ! git clone "$REPO_URL" "$WORK_DIR" 2>&1; then
    echo "[$LOG_DATE] ERROR: git clone failed — skipping"
    continue
  fi

  if [ ! -f "$WORK_DIR/drafts/$DRAFT_FILE" ]; then
    echo "[$LOG_DATE] ERROR: Draft file not found: drafts/$DRAFT_FILE — skipping"
    rm -rf "$WORK_DIR"
    continue
  fi

  cd "$WORK_DIR"
  PIPELINE_OUTPUT=$("$CLAUDE_BIN" --print \
    "Read CLAUDE.md in the repo root, then publish the blog draft drafts/${DRAFT_FILE}.

Only this supplied draft is in scope.
Do not auto-select any other draft.
If the quality gate fails, do not commit or push, and include QUALITY_GATE_FAIL in your summary." \
    --dangerously-skip-permissions \
    < /dev/null 2>&1)

  PIPELINE_EXIT=$?
  echo "$PIPELINE_OUTPUT"

  if [ $PIPELINE_EXIT -eq 0 ] && ! echo "$PIPELINE_OUTPUT" | grep -q "QUALITY_GATE_FAIL"; then
    COMPLETE_RESULT=$(curl -sf -X POST \
      -H "Authorization: Bearer ${VPS_API_KEY}" \
      "${API_URL}/api/schedules/${SCHEDULE_ID}/complete" 2>&1)
    LOG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    echo "[$LOG_DATE] PUBLISHED: $DRAFT_FILE"
    echo "[$LOG_DATE] Scheduler updated: $COMPLETE_RESULT"
    curl -sf -X POST \
      -H "Authorization: Bearer ${VPS_API_KEY}" \
      -H "Content-Type: application/json" \
      -d "{\"result\":\"published\",\"draftPublished\":\"${DRAFT_FILE}\"}" \
      "${API_URL}/api/status/ping" > /dev/null 2>&1 || true
  else
    LOG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    echo "[$LOG_DATE] PIPELINE DID NOT COMPLETE for $DRAFT_FILE — not marked as published"
    echo "[$LOG_DATE] Exit code: $PIPELINE_EXIT"
  fi

  LOG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  echo "[$LOG_DATE] Cleaning up work directory..."
  rm -rf "$WORK_DIR"

done

LOG_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "[$LOG_DATE] Check complete."
