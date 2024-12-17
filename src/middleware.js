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

    // If the user is authenticated, prevent access to the login page and redirect them to their respective page
    if (isAuthenticated) {
        if (isAuthRoute) {
            // If user is already logged in, redirect to their respective landing page (Admin/User)
            const userRole = token?.role?.name;

            if (userRole === 'Admin') {
                return NextResponse.redirect(new URL(ADMIN_ROUTES[0], nextUrl)); // Admin landing page
            } else if (userRole === 'User') {
                return NextResponse.redirect(new URL(USER_ROUTES[0], nextUrl)); // User landing page
            } else {
                return NextResponse.redirect(new URL(ROOT, nextUrl)); // Redirect to root if role is not recognized
            }
        }
    }

    // If the route is public (like login or other accessible routes), allow the request to continue
    if (isPublicRoute) {
        return NextResponse.next();
    }

    // If the user is not authenticated and trying to access a protected route
    if (!isAuthenticated) {
        if (!isAuthRoute) {
            // Redirect to the login page if the user is not authenticated
            return NextResponse.redirect(new URL(LOGIN, nextUrl));
        }
    }

    // If the user is authenticated, check their role
    const userRole = token?.role?.name; // Assuming role is saved in the JWT token

    if (userRole === 'Admin') {
        // If the user is an admin, redirect to the admin route if they are not already on an admin route
        if (!ADMIN_ROUTES.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL(ADMIN_ROUTES[0], nextUrl)); // Admin landing page
        }
    } else if (userRole === 'User') {
        // If the user is a regular user, redirect to the user route if they are not already on a user route
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
