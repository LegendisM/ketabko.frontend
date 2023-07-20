import _ from "lodash";
import faStorage from "./locales/fa.json";

export enum I18nLanguage {
    FA = 'fa'
}

export const i18nStorage: Record<I18nLanguage, any> = {
    fa: faStorage,
};

export const i18n = (identifier: string, values: Record<string, any> = {}, locale: I18nLanguage.FA = I18nLanguage.FA): string => {
    const [ns, key] = identifier.split(':');
    let result: string = i18nStorage[locale][ns][key];
    _.map(values, (value, key) => {
        result = result.replaceAll(`{${key}}`, value);
    });
    return result;
}