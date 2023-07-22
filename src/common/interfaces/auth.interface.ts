import { IUser } from "./user.interface";

export interface IAuth {
    state: boolean;
    user: IUser | null | undefined;
    onEnter?(token: string): void;
    onLogout?(): void;
}

export interface IAuthResponse {
    state: boolean;
    token: string;
    message: string;
}