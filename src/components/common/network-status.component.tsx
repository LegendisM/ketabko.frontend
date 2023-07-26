import { AxiosError } from "axios";
import { Button, Container, Paper, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/RefreshRounded";
import { FC, PropsWithChildren, useEffect } from "react";
import { useSetState } from "react-use";
import Loading from "./loading";
import { i18n } from "@/i18n/i18n";
import { IResponseError } from "@/common/interfaces/common/error.interface";
import _ from "lodash";

const NetworkStatus: FC<PropsWithChildren & { loading: boolean, error: AxiosError<IResponseError> | null, whitelist?: number[], onRetry?(): void }> = ({ loading, error, whitelist = [200, 201, 401, 403], onRetry, children }) => {
    const [info, setInfo] = useSetState({ init: false, enabled: false, content: '', canRetry: false });

    useEffect(() => {
        const status = error?.response?.status ?? 0;
        const code = error?.code;
        if (code && _.includes(whitelist, status) == false) {
            if (status == 404) {
                setInfo({ enabled: true, content: i18n('errors:not-found-404'), canRetry: false });
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
                            : null
                    }
                </Paper>
            </Container>
            :
            <Loading loading={(loading || !info.init)} >{children}</Loading>
    );
}

export default NetworkStatus;