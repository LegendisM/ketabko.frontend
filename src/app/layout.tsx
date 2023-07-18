import Head from "next/head";
import { I18nLanguage, i18n } from "@/i18n/i18n";
import Theme from "@/components/common/theme.component";
import Header from "@/components/common/header.component";
import { FC, PropsWithChildren } from "react";
import './../styles/global.style.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang={I18nLanguage.FA} dir="rtl">
      <Head>
        {
          // TODO: fix that loading of title and meta
        }
        <title>{i18n('common:title')}</title>
        <meta name="description" content={i18n('common:description')} />
      </Head>
      <Theme>
        <Header />
        {children}
      </Theme>
    </html >
  );
}

export default RootLayout;