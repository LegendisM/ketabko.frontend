"use client"
import _ from "lodash";
import Link from "next/link";
import AvatarPro from "@/components/common/avatar.component";
import { i18n } from "@/i18n/i18n";
import { Box, Paper, TextField, Button, Container, Typography, Divider, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { useApi } from "@/common/services/axios.service";
import { ApiEndpoint } from "@/constants/api.constant";
import { FC, useContext } from "react";
import { IAuthResponse } from "@/common/interfaces/auth/auth.interface";
import { AuthContext } from "@/components/common/auth.component";
import { useSetState } from "react-use";
import NetworkStatus from "@/components/common/network-status.component";
import { useRouter } from "next/navigation";

const SignIn: FC = () => {
    const router = useRouter();
    const { onEnter } = useContext(AuthContext);
    const [messages, setMessages] = useSetState({ error: '' });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const [{ loading, error }, signin] = useApi<IAuthResponse>({
        url: ApiEndpoint('auth', 'signin'),
        method: 'POST'
    });

    const onAuthSubmit = async (data: object) => {
        await signin({ data })
            .then(({ data: { state, token, message } }) => {
                if (state) {
                    onEnter!(token);
                } else {
                    setMessages({ error: message });
                }
            })
            .catch(() => null);
    }

    return (
        <NetworkStatus loading={loading} error={error} onRetry={() => router.replace('.')}>
            <Box marginTop={'5vh'}>
                <Container maxWidth="sm">
                    <Paper
                        sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
                        component={'form'}
                        onSubmit={handleSubmit(onAuthSubmit)}
                    >
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginY={'10px'}>
                            <AvatarPro />
                            <Typography fontSize={'1.05rem'} fontWeight={'bold'} sx={{ marginLeft: '12px' }}>{i18n('common:signin-long')}</Typography>
                        </Box>
                        <Divider sx={{ marginBottom: '8px' }} />
                        <TextField
                            label={i18n('common:username')}
                            margin="dense"
                            helperText={errors.username?.message}
                            {...register('username', {
                                required: { value: true, message: i18n('validation:required') },
                                minLength: { value: 3, message: i18n('validation:min', { min: 3 }) },
                                maxLength: { value: 16, message: i18n('validation:max', { max: 16 }) }
                            })}
                        />
                        <TextField
                            label={i18n('common:password')}
                            type="password"
                            margin="dense"
                            helperText={errors.password?.message}
                            {...register('password', {
                                required: { value: true, message: i18n('validation:required') },
                                minLength: { value: 4, message: i18n('validation:min', { min: 4 }) },
                                maxLength: { value: 18, message: i18n('validation:max', { max: 18 }) }
                            })}
                        />
                        {messages.error.length != 0 ?
                            <Alert
                                severity='error'
                                sx={{ marginTop: '10px' }}
                                onClose={() => setMessages({ error: '' })}
                            >
                                {messages.error}
                            </Alert>
                            : null
                        }
                        <Button type="submit" color="secondary" variant="contained" disableElevation sx={{ marginTop: '12.5px', marginBottom: '8px' }}>{i18n('common:signin')}</Button>
                        <Divider sx={{ marginBottom: '8px' }} />
                        <Link href={'/auth/signup'} style={{ width: '100%' }}>
                            <Button variant="text" fullWidth>
                                <Typography variant="body2" textAlign={'center'}>
                                    {i18n('common:signup-long')}
                                </Typography>
                            </Button>
                        </Link>
                    </Paper>
                </Container>
            </Box>
        </NetworkStatus>
    );
}

export default SignIn;