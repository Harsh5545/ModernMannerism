import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { parse } from 'cookie';

const getUserRole = (req) => {
    const cookies = parse(req.headers.get('cookie') || '');
    const token = cookies.token;
    if (token) {
        try {
            const user = jwtDecode(token);
            return user.roleName;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
    return null;
};

const linkData = {
    Admin: [
        { href: "/dashboard", text: "Dashboard", icon: "Home" },
        { href: "/categories", text: "Categories", icon: "Package" },
        { href: "/sub-categories", text: "SubCategories", icon: "Package" },
        { href: "/customers", text: "Customers", icon: "Users" },
        { href: "/partners", text: "Partners", icon: "Users" },
        { href: "/analytics", text: "Analytics", icon: "LineChart" },
        { href: "/faq", text: "Add Faq", icon: "Users" },
        { href: "/sub-categories/add-service", text: "", icon: "" },
    ],
    Partner: [
        { href: "/products", text: "Products", icon: "Package" },
        { href: "/customers", text: "Customers", icon: "Users" },
        { href: "/analytics", text: "Analytics", icon: "LineChart" },
    ],
    Member: [
        { href: "/home", text: "home", icon: "Home" },
        { href: "/products", text: "Products", icon: "Package" },
        { href: "/checkout", text: "Checkout", icon: "LineChart" },
    ],
    common: [
        { href: "/booking", text: "Booking", icon: "BookImageIcon" },
        { href: "/account", text: "Account", icon: "CircleUser" },
        { href: "/orders", text: "Orders", icon: "ShoppingCart", badge: 6 },
    ],
};

const roleRedirection = {
    Admin: '/dashboard',
    Member: '/home',
    Partner: '/customers'
};

export function middleware(req) {
    const role = getUserRole(req);
    const urlPath = req.nextUrl.pathname;
    // temporary fix for development
    const ignoredPaths = ['/', '/firebase-messaging-sw.js', '/swe-worker-development.js', '/manifest.json', '/sw.js', '/icons/android-chrome-192x192.png', '/_next/', '/favicon.ico'];

    // Allow static assets and certain paths
    if (ignoredPaths.some((path) => urlPath.startsWith(path))) {
        return NextResponse.next();
    }

    // If the user is not authenticated
    if (!role) {
        if (urlPath !== '/sign-in') {
            return NextResponse.redirect(new URL('/sign-in', req.url)); // Redirect to login or home
        }
        return NextResponse.next();
    }

    // Handle role-based redirection

    // Combine allowed paths for the role and common paths
    const allowedPaths = [
        ...linkData.common.map((link) => link.href),
        ...(linkData[role] || []).map((link) => link.href),
    ];

    // Check if the requested path starts with any allowed path
    const isAllowed = allowedPaths.some((allowedPath) => urlPath.startsWith(allowedPath));

    if (!isAllowed) {
        if (roleRedirection[role]) {
            if (urlPath !== roleRedirection[role] && !urlPath.startsWith(roleRedirection[role])) {
                return NextResponse.redirect(new URL(roleRedirection[role], req.url));
            }
        }
        return NextResponse.redirect(new URL(urlPath, req.url)); // Redirect to the same page
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
