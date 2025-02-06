import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const middleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'de',
});

export default function Middleware(req: any) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith('/de') && !pathname.startsWith('/en')) {
    return NextResponse.redirect(new URL(`/de${pathname}`, req.url));
  }

  return middleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
