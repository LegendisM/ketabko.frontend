"use client"
import { AuthContext } from "@/components/common/auth";
import AvatarPro from "@/components/common/avatar.component";
import { i18n } from "@/i18n/i18n";
import { Box, Container, Paper, Typography, Divider, TextField } from "@mui/material";
import { FC, PropsWithChildren, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

const User: FC<PropsWithChildren> = () => {
    const { user } = useContext(AuthContext);
    const { setValue, register } = useForm({
        defaultValues: {
            username: ''
        }
    });

    useEffect(() => {
        return setValue('username', user?.username ?? '');
    }, [user])

    return (
        <Box marginTop={'5vh'}>
            <Container maxWidth="sm" >
                <Paper sx={{ padding: '15px' }}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginTop={'10px'} marginBottom={'10px'}>
                        <AvatarPro />
                        <Typography fontSize={'1.05rem'} fontWeight={'bold'} sx={{ marginLeft: '12px' }}>{i18n('common:profile')}</Typography>
                    </Box>
                    <Divider sx={{ marginY: '1vh' }} />
                    <TextField
                        label={i18n('common:username')}
                        margin="dense"
                        fullWidth
                        {...register('username', { disabled: true })}
                    />
                </Paper>
            </Container>
        </Box>
    );
}

export default User;