const ADMIN_SESSION_COOKIE = 'stg_admin_session'
const ADMIN_SESSION_PAYLOAD = 'stg-admin-v1'

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export async function createAdminSessionToken(secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(ADMIN_SESSION_PAYLOAD)
  )

  return toHex(signature)
}

export async function isValidAdminSession(
  sessionToken: string | undefined,
  secret: string | undefined
): Promise<boolean> {
  if (!sessionToken || !secret) {
    return false
  }

  const expectedToken = await createAdminSessionToken(secret)
  return sessionToken === expectedToken
}

export { ADMIN_SESSION_COOKIE }
