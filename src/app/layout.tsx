import { I18nLanguage, i18n } from "@/i18n/i18n";
import Theme from "@/components/common/theme.component";
import Header from "@/components/common/header.component";
import { FC, PropsWithChildren } from "react";
import './../styles/global.style.css';
import AuthProvider from "@/components/common/auth";

export async function generateMetadata({ params }: { params: any }) {
  return {
    title: i18n('common:title'),
    description: i18n('common:description')
  }
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang={I18nLanguage.FA} dir="rtl">
      <Theme>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </Theme>
    </html >
  );
}

export default RootLayout;