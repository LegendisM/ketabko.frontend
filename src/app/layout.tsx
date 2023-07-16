import { i18n } from "@/i18n/i18n";
import Head from "next/head";

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <title>{i18n('common:title')}</title>
        <meta name="description" content={i18n('common:description')} />
      </Head>
      <body>{children}</body>
    </html>
  )
}