import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter, EB_Garamond, Amiri_Quran } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
});

const amiriQuran = Amiri_Quran({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amiri-quran',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable} ${amiriQuran.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            hotKey: [
              {
                display: '/',
                key: '/',
              },
            ],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
