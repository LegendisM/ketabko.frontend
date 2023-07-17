import Head from "next/head";
import { I18nLanguage, i18n } from "@/i18n/i18n";
import Theme from "@/components/common/theme.component";
import Header from "@/components/common/header.component";
import { FC, PropsWithChildren } from "react";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang={I18nLanguage.FA} dir="rtl">
      <Head>
        <title>{i18n('common:title')}</title>
        <meta name="description" content={i18n('common:description')} />
      </Head>
      <body style={{ margin: 0 }}>
        <Theme>
          <Header />
          {children}
        </Theme>
      </body>
    </html >
  );
}

export default RootLayout;