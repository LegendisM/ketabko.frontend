"use client"
import { IAuth } from "@/common/interfaces/auth/auth.interface";
import { IUser } from "@/common/interfaces/user/user.interface";
import { setAuthToken } from "@/common/services/auth.service";
import { useApi } from "@/common/services/axios.service";
import { ApiEndpoint } from "@/constants/api.constant";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, createContext, useContext } from "react";
import { useEffectOnce, useSetState } from "react-use";
import NetworkStatus from "./network-status.component";
import { i18n } from "@/i18n/i18n";
import { Container, Paper, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const AuthContext = createContext<IAuth>({ state: false, user: null });

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();
    const [auth, setAuth] = useSetState<IAuth>({ state: false, user: null });
    const [{ loading, error }, fetchUser] = useApi<IUser>({
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
            <NetworkStatus loading={loading} error={error} onRetry={fetch}>
                {children}
            </NetworkStatus>
        </AuthContext.Provider>
    );
}

export const AuthAccess: FC<PropsWithChildren & { isAuth: boolean, defaultMessage?: boolean }> = ({ isAuth = true, defaultMessage = false, children }) => {
    const { state } = useContext(AuthContext);
    return (
        state == isAuth ? children : (defaultMessage ? <AuthAccessError /> : null)
    );
}

export const AuthAccessError: FC = () => {
    const router = useRouter();

    return (
        <Container sx={{ padding: '15px' }}>
            <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '15px' }}>
                <Typography>
                    {i18n('errors:auth-access-error')}
                </Typography>
                <Button
                    variant="outlined"
                    color="error"
                    endIcon={<ArrowBackIcon />}
                    onClick={() => router.push('/')}
                >
                    {i18n('common:back')}
                </Button>
            </Paper>
        </Container>
    );
}

export default AuthProvider;