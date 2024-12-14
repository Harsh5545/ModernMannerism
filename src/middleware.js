import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';
import { authConfig } from './auth.config';
import { PUBLIC_ROUTES, ADMIN_ROUTES, USER_ROUTES, LOGIN, ROOT } from './lib/routes';
const { auth } = NextAuth(authConfig);

export async function middleware(request) {
    const {nextUrl} = request;
    const session = await auth();
    console.log(session,"SESSION");
    const isAuthenticate = !!session?.user;
    console.log(isAuthenticate,nextUrl.pathname);
}
export const config = {
    matcher: '/api/:path*',
};
