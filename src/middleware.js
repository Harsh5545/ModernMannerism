import NextAuth from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { PUBLIC_ROUTES, ADMIN_ROUTES, USER_ROUTES, LOGIN, ROOT } from './lib/routes';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    const { nextUrl } = request;
    const isAuthenticated = !!token;
    console.log(token,"TOKEN")
    const isPublicRoute = PUBLIC_ROUTES.some(route => nextUrl.pathname.startsWith(route)) || nextUrl.pathname === ROOT;
    const isAuthRoute = nextUrl.pathname.startsWith(LOGIN);

    if (isAuthenticated) {
        if (isAuthRoute) {
            const userRole = token?.role?.name;

            if (userRole === 'Admin') {
                return NextResponse.redirect(new URL(ADMIN_ROUTES[0], nextUrl));
            } else if (userRole === 'User') {
                return NextResponse.redirect(new URL(USER_ROUTES[0], nextUrl));
            } else {
                return NextResponse.redirect(new URL(ROOT, nextUrl));
            }
        }
    }

    if (isPublicRoute) {
        return NextResponse.next();
    }

    if (!isAuthenticated) {
        if (!isAuthRoute) {
            return NextResponse.redirect(new URL(LOGIN, nextUrl));
        }
    }

    const userRole = token?.role?.name; 

    if (userRole === 'Admin') {
        if (!ADMIN_ROUTES.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL(ADMIN_ROUTES[0], nextUrl)); 
        }
    } else if (userRole === 'User') {
        if (!USER_ROUTES.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL(USER_ROUTES[0], nextUrl));
        }
    } else {
        return NextResponse.redirect(new URL(ROOT, nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};
