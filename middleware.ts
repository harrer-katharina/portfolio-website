import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

const middleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'de',
});

export default function Middleware(req: any) {
  const { pathname } = req.nextUrl;
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;

  if (!pathname.startsWith('/de') && !pathname.startsWith('/en')) {
    const redirectLocale = cookieLocale || "de";
    return NextResponse.redirect(new URL(`/${redirectLocale}${pathname}`, req.url));
  }

  const res = middleware(req);
  if (cookieLocale !== pathname.split("/")[1]) {
    res.cookies.set("NEXT_LOCALE", pathname.split("/")[1], { maxAge: 60 * 60 * 24 * 365 });
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
