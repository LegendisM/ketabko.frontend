export enum I18nLanguage {
    EN = 'en',
    FA = 'fa'
}

export const i18nStorage: Record<I18nLanguage, any> = {
    en: (await import('./locales/en.json')).default,
    fa: (await import('./locales/fa.json')).default,
};

export const i18n = (identifier: string, locale: I18nLanguage.FA = I18nLanguage.FA): string => {
    const [ns, key] = identifier.split(':');
    return i18nStorage[locale][ns][key];
}