export const API_CONFIG: Record<string, Record<string, string>> = {
    ['main']: {
        ['base']: 'http://127.0.0.1:3000/api/v1'
    },
    ['user']: {
        ['me']: '/users/me'
    },
    ['auth']: {
        ['signin']: '/auth/signin',
        ['signup']: '/auth/signup',
    },
    ['book']: {
        ['explore']: '/books/explore',
        ['find']: '/books/:id'
    }
};

export const ApiEndpoint = (category: string, key: string): string => {
    return API_CONFIG[category][key];
}