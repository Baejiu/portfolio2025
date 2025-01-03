import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import Header from '@/common/components/layout/Header';
import ThemeProvider from '@/common/theme/ThemeProvider';
import ReactQueryProviders from '@/common/hooks/useReactQuery';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Footer from '@/common/components/layout/Footer';

const geistSans = localFont({
  src: '../common/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../common/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const mm87Regular = localFont({
  src: '../common/fonts/87MMILSANG-Regular.ttf',
  variable: '--font-87mm-regular',
  weight: '100 200 400 500 900',
});

const mm87Obligue = localFont({
  src: '../common/fonts/87MMILSANG-Oblique.ttf',
  variable: '--font-87mm-obligue',
  weight: '100 200 400 500 900',
});

export const metadata: Metadata = {
  title: `BAE JI U portfolio`,
  description: 'frontend portfolio, web developer, FE 프론트엔드 포트폴리오',
  icons: {
    icon: '/assets/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${mm87Regular.variable} ${mm87Obligue.variable} ${geistSans.variable} ${geistMono.variable} ${GeistSans.className} ${GeistMono.className}`}
    >
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            <ReactQueryProviders>{children}</ReactQueryProviders>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
