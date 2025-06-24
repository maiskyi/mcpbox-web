import createMiddleware from 'next-intl/middleware';

import { routing } from '@core/navigation';

export default createMiddleware(routing);

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
