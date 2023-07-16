import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t, lang } = useTranslation();
  return (
    <p>{t('title')}|{lang}</p>
  )
}
