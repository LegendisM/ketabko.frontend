export const API_CONFIG: Record<string, Record<string, string>> = {
    ['main']: {
        ['base']: 'http://127.0.0.1/api/v1'
    },
    ['auth']: {
        ['signin']: '/auth/signin',
        ['signup']: '/auth/signup',
    },
};

export const ApiEndpoint = (category: string, key: string): string => {
    return API_CONFIG[category][key];
}