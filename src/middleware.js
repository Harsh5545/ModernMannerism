import NextAuth from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { PUBLIC_ROUTES, ADMIN_ROUTES, USER_ROUTES, LOGIN, ROOT } from './lib/routes';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    console.log(token, "JWT Token from middleware");

    const { nextUrl } = request;
    const isAuthenticated = !!token;

    const isPublicRoute = ((PUBLIC_ROUTES.find(route => nextUrl.pathname.startsWith(route))|| nextUrl.pathname === ROOT));

    console.log(isPublicRoute);
    const isAuthRoute = nextUrl.pathname.startsWith(LOGIN);

    if (isPublicRoute) {
        // If the route is public, allow access
        return NextResponse.next();
    }

    // If the user is authenticated, check their role
    const userRole = token?.role?.name; // Assuming role is saved in the JWT token

    if (userRole === 'admin') {
        // If the user is an admin, redirect to the admin route
        if (!ADMIN_ROUTES.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL(ADMIN_ROUTES[0], nextUrl)); // Admin landing page
        }
    } else if (userRole === 'user') {
        // If the user is a regular user, redirect to the user route
        if (!USER_ROUTES.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL(USER_ROUTES[0], nextUrl)); // User landing page
        }
    } else {
        // If the role is not recognized, you could redirect them to a default page
        return NextResponse.redirect(new URL(ROOT, nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};
