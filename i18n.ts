import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export const locales = ['ar', 'en'] as const;
export const defaultLocale = 'ar' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  // Try to get locale from cookie
  const cookieStore = cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  // If not in cookie, try to get from Accept-Language header
  if (!locale) {
    const headersList = headers();
    const acceptLanguage = headersList.get('accept-language');
    
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(',')[0]
        .split('-')[0]
        .toLowerCase();
      
      locale = locales.includes(preferredLocale as Locale)
        ? preferredLocale
        : defaultLocale;
    }
  }

  // Fallback to default locale
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./public/locales/${locale}/common.json`)).default,
  };
});
