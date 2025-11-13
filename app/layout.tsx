import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'ذاكرلي - Zakerly | منصة تعليمية ذكية',
  description: 'منصة تعليمية ذكية متطورة تجمع بين المناهج الدراسية والذكاء الاصطناعي لتقديم تجربة تعليمية فريدة',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
