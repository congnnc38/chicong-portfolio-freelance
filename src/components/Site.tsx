import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { getContent, home, type Lang } from '@/i18n';
import Providers from './Providers';
import Nav from './Nav';
import Cursor from './Cursor';
import Hero from './Hero';
import Products from './Products';
import { About, Contact, Faq, Footer, Process, Services } from './Sections';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chicong-freelance.vercel.app';

export function siteMetadata(lang: Lang): Metadata {
  const { t } = getContent(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: home[lang], languages: { vi: home.vi, en: home.en } },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: 'website',
      locale: t.meta.locale,
      url: home[lang],
      images: [{ url: '/covers/kol-portal.webp', width: 1600, height: 844, alt: 'kol.gov.vn' }],
    },
    icons: { icon: '/icon.svg' },
  };
}

export const siteViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ef' },
    { media: '(prefers-color-scheme: dark)', color: '#12100d' },
  ],
};

// Chọn giao diện sáng/tối trước khi trang hiện ra để không bị nháy màu:
// ưu tiên lựa chọn đã lưu, nếu chưa chọn thì theo cài đặt của máy.
const themeScript = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}`;

export function RootDocument({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// Toàn bộ trang, dùng chung cho bản tiếng Việt và tiếng Anh
export function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <Products lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <Cursor />
    </>
  );
}
