import Head from "next/head";
import useTranslation from 'next-translate/useTranslation';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  const { t, lang } = useTranslation();
  return (
    <html lang={lang} dir={lang == 'fa' ? 'rtl' : 'ltr'}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <body>{children}</body>
    </html>
  )
}