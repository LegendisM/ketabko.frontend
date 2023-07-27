import _ from "lodash";
import { AxiosError } from "axios";
import { Button, Container, Paper, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/RefreshRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FC, PropsWithChildren, useEffect } from "react";
import { useSetState } from "react-use";
import Loading from "./loading";
import { i18n } from "@/i18n/i18n";
import { IResponseError } from "@/common/interfaces/common/error.interface";

const NetworkStatus: FC<PropsWithChildren & {
    loading: boolean,
    error: AxiosError<IResponseError> | null,
    whitelist?: number[],
    backHref?: string,
    onRetry?(): void
}> = ({ loading, error, whitelist = [200, 201, 401], backHref, onRetry, children }) => {
    const [info, setInfo] = useSetState({ init: false, enabled: false, content: '', canRetry: false });

    useEffect(() => {
        const status = error?.response?.status ?? 0;
        const code = error?.code;
        if (code && _.includes(whitelist, status) == false) {
            if (status == 404) {
                setInfo({ enabled: true, content: i18n('errors:not-found-404'), canRetry: false });
            } else if (status == 403) {
                setInfo({ enabled: true, content: i18n('errors:auth-access-error'), canRetry: false });
            } else {
                setInfo({ enabled: true, content: i18n('errors:internal-error'), canRetry: true });
            }
        } else if (code == "ERR_NETWORK") {
            setInfo({ enabled: true, content: i18n('errors:internet-error'), canRetry: true });
        } else {
            setInfo({ enabled: false });
        }
        setInfo({ init: true });
    }, [error]);

    return (
        info.enabled ?
            <Container sx={{ padding: '15px' }}>
                <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '15px' }}>
                    <Typography>
                        {info.content}
                    </Typography>
                    {
                        info.canRetry ?
                            <Button
                                variant="outlined"
                                color="error"
                                endIcon={<RefreshIcon />}
                                onClick={onRetry}
                            >
                                {i18n('common:retry')}
                            </Button>
                            : backHref ? (
                                <Button
                                    variant="outlined"
                                    color="info"
                                    endIcon={<ArrowBackIcon />}
                                    href={backHref}
                                >
                                    {i18n('common:back')}
                                </Button>
                            ) : null
                    }
                </Paper>
            </Container>
            :
            <Loading loading={(loading || !info.init)} >{children}</Loading>
    );
}

export default NetworkStatus;