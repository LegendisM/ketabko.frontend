"use client"
import { IAuth } from "@/common/interfaces/auth.interface";
import { IUser } from "@/common/interfaces/user.interface";
import { setAuthToken } from "@/common/services/auth.service";
import { useApi } from "@/common/services/axios.service";
import { ApiEndpoint } from "@/constants/api.constant";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, createContext, useContext } from "react";
import { useEffectOnce, useSetState } from "react-use";
import Loading from "./loading";

export const AuthContext = createContext<IAuth>({ state: false, user: null });

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();
    const [auth, setAuth] = useSetState<IAuth>({ state: false, user: null });
    const [{ loading }, fetchUser] = useApi<IUser>({
        url: ApiEndpoint('user', 'me')
    });

    useEffectOnce(() => {
        fetch();
    });

    const fetch = () => {
        fetchUser()
            .then(({ data: user }) => {
                setAuth({ state: !!user, user });
            })
            .catch(() => {
                setAuth({ state: false, user: null });
            });
    }

    const onEnter = (token: string) => {
        setAuthToken(token);
        fetch();
        router.push('/');
    }
    
    const onLogout = () => {
        setAuthToken(null);
        setAuth({ state: false, user: null });
        router.push('/');
    }

    return (
        <AuthContext.Provider value={{ ...auth, onEnter, onLogout }}>
            <Loading loading={loading}>
                {children}
            </Loading>
        </AuthContext.Provider >
    );
}

export const AuthAccess: FC<PropsWithChildren & { isAuth: boolean }> = ({ isAuth = true, children }) => {
    const { state } = useContext(AuthContext);
    return (
        state == isAuth ? children : null
    );
}

export default AuthProvider;