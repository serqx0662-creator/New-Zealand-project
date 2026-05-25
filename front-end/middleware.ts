import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === '/ru' || pathname === '/ru/' || pathname === '/en' || pathname === '/en/') {
        const lang = pathname.includes('en') ? 'en' : 'ru';
        return NextResponse.redirect(new URL(`/${lang}/Home`, request.url));
    }

    // Если зашли вообще на пустой корень "/"
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/ru/Home', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/ru', '/ru/', '/en', '/en/'],
};