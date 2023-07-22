import { AUTH_TOKEN_COOKIE } from "@/constants/auth.constant";

export const setAuthToken = (token: string | null) => {
    if (typeof window != 'undefined') {
        if (token){
            window.localStorage.setItem(AUTH_TOKEN_COOKIE, token);
        } else {
            window.localStorage.removeItem(AUTH_TOKEN_COOKIE);
        }
    }
}

export const getAuthToken = (): string | null => {
    let token = null;
    if (typeof window != 'undefined') {
        token = window.localStorage.getItem(AUTH_TOKEN_COOKIE);
    }
    return token;
}