import _ from "lodash";

export const API_CONFIG: Record<string, Record<string, string>> = {
    ['main']: {
        ['base']: 'http://127.0.0.1:3000/api/v1',
        ['storage']: 'http://127.0.0.1:3000'
    },
    ['user']: {
        ['me']: '/users/me'
    },
    ['auth']: {
        ['signin']: '/auth/signin',
        ['signup']: '/auth/signup',
    },
    ['book']: {
        ['all']: '/books/',
        ['find']: '/books/{id}'
    },
    ['book-section-document']: {
        ['create']: '/book-section-documents/me',
        ['find-all-by-section']: '/book-section-documents/me/section/{section}',
        ['find-one']: '/book-section-documents/me/{id}',
        ['update-one']: '/book-section-documents/me/{id}',
        ['remove-one']: '/book-section-documents/me/{id}',
    },
};

export const ApiEndpoint = (category: string, key: string, values: Record<string, any> = {}): string => {
    let result = API_CONFIG[category][key];
    _.map(values, (value, key) => {
        result = result.replaceAll(`{${key}}`, value);
    });
    return result;
}