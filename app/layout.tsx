import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-headline-family',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body-family',
});

export const metadata: Metadata = {
  title: 'AICavo - AI & SaaS Tools Directory',
  description: 'The Most Advanced AI & SaaS Tools Directory Platform',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-surface font-body text-on-surface antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
