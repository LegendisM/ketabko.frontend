import Language from "@/components/common/language.component";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t, lang } = useTranslation();
  return (
    <div>
      <p>{t('title')}|{lang}</p>
      <Language/>
    </div>
  )
}
