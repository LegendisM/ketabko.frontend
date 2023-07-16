import Head from "next/head";

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  const lang = 'fa';
  return (
    <html lang={lang} dir={lang == 'fa' ? 'rtl' : 'ltr'}>
      <Head>
        <title>{'title'}</title>
        <meta name="description" content={'description'} />
      </Head>
      <body>{children}</body>
    </html>
  )
}