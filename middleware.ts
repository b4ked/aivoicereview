import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import {
  ADMIN_SESSION_COOKIE,
  isValidAdminSession,
} from './base/src/lib/admin-auth'

const ADMIN_LOGIN_PATH = '/admin/login'

function addAdminHeader(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-is-admin', '1')

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionToken = request.cookies.get(ADMIN_SESSION_COOKIE)?.value
  const isAuthenticated = await isValidAdminSession(
    sessionToken,
    process.env.ADMIN_SECRET
  )

  if (pathname === ADMIN_LOGIN_PATH) {
    if (isAuthenticated) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin'
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  }

  if (!isAuthenticated) {
    if (pathname.startsWith('/api/admin/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = request.nextUrl.clone()
    url.pathname = ADMIN_LOGIN_PATH
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  return addAdminHeader(request)
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
