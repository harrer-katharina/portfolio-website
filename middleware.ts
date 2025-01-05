import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'de',
});

export default function Middleware(req: any) {
  return middleware(req);
}

export const config = {
  matcher: ['/', '/:locale(en|de)/:path*'],
};
