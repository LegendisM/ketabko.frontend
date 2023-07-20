"use client"
import _ from "lodash";
import AvatarPro from "@/components/common/avatar.component";
import { i18n } from "@/i18n/i18n";
import { Box, Paper, TextField, Button, Container, Typography, Divider, Alert, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { useApi } from "@/common/services/axios.service";
import { ApiEndpoint } from "@/constants/api.constant";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";

const SignUp: FC<PropsWithChildren> = () => {
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
    const [{ loading }, signup] = useApi({
        url: ApiEndpoint('auth', 'signup'),
        method: 'POST'
    });

    const onAuthSubmit = async (data: unknown) => {
        // TODO: complete/fix signin process
        await signup({ data })
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }

    return (
        <Box marginTop={'5vh'}>
            <Container maxWidth="sm">
                <Paper
                    sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
                    component={'form'}
                    onSubmit={handleSubmit(onAuthSubmit)}
                >
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginTop={'10px'} marginBottom={'10px'}>
                        <AvatarPro />
                        <Typography fontSize={'1.05rem'} fontWeight={'bold'} sx={{ marginLeft: '12px' }}>{i18n('common:signup-long')}</Typography>
                    </Box>
                    <Divider sx={{ marginBottom: '8px' }} />
                    <TextField
                        label={i18n('common:username')}
                        margin="dense"
                        aria-describedby="username-helper"
                        helperText={errors.username?.message}
                        {...register('username', {
                            required: { value: true, message: i18n('validation:required') },
                            minLength: { value: 3, message: i18n('validation:min', { min: 3 }) },
                            maxLength: { value: 16, message: i18n('validation:max', { max: 16 }) }
                        })}
                    />
                    <TextField
                        label={i18n('common:password')}
                        margin="dense"
                        aria-describedby="password-helper"
                        helperText={errors.password?.message}
                        {...register('password', {
                            required: { value: true, message: i18n('validation:required') },
                            minLength: { value: 4, message: i18n('validation:min', { min: 4 }) },
                            maxLength: { value: 18, message: i18n('validation:max', { max: 18 }) }
                        })}
                    />
                    <Button type="submit" variant="contained" sx={{ marginTop: '15px', marginBottom: '8px' }}>{i18n('common:signup')}</Button>
                    <Divider sx={{ marginBottom: '8px' }} />
                    <Link href={'/auth/signin'} style={{ width: '100%' }}>
                        <Button variant="outlined" fullWidth>
                            <Typography variant="body2" textAlign={'center'}>
                                {i18n('common:signin-long')}
                            </Typography>
                        </Button>
                    </Link>
                </Paper>
            </Container>
        </Box >
    );
}

export default SignUp;