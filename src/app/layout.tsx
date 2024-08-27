import type { Metadata, Viewport } from 'next';
import { Fraunces, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/hooks/theme-provider';
import { cn } from '@/lib/utils';
import { Analytics } from "@vercel/analytics/react"

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Billbarr.codes',
  description: "Billy Steen Barrett's personal website",
  category: 'Software Development',
  keywords: [
    'billy steen barrett',
    'blog',
    'software development',
    'music',
    'design',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: 'rgb(255, 255, 255)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fraunces.variable,
          outfit.variable,
          'bg-brand-1 dark:bg-brandDark-1 text-gs-12 dark:text-gsDark-12 font-outfit',
        )}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
