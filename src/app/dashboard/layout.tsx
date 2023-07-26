"use client"
import { i18n } from "@/i18n/i18n";
import { FC, PropsWithChildren } from "react";
import { AuthAccess } from "@/components/common/auth.component";
import { Button, Container, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();

    return (
        <>
            <AuthAccess isAuth>
                {children}
            </AuthAccess>
            <AuthAccess isAuth={false}>
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
            </AuthAccess>
        </>
    );
}

export default DashboardLayout;