import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Protect admin routes
    if (pathname.startsWith('/admin')) {
        const session = request.cookies.get('admin-session')

        if (!session || session.value !== 'authenticated') {
            // Redirect to home with login modal trigger
            return NextResponse.redirect(new URL('/?login=true', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
