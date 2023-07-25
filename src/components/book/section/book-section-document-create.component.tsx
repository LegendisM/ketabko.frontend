"use client"
import { i18n } from "@/i18n/i18n";
import { useForm } from "react-hook-form";
import { FC, PropsWithChildren } from "react";
import { IBookSection } from "@/common/interfaces/book/book-section.interface";
import { IResponseError } from "@/common/interfaces/common/error.interface";
import { useApi } from "@/common/services/axios.service";
import NetworkStatus from "@/components/common/network-status.component";
import { ApiEndpoint } from "@/constants/api.constant";
import { Box, Button, Dialog, Divider, Paper, TextField, Typography } from "@mui/material";
import { CloseButton } from "@/components/common/buttons.component";

const BookSectionDocumentCreate: FC<PropsWithChildren & { section: IBookSection, onClose(created: boolean): void }> = ({ section, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            title: ''
        }
    });
    const [{ loading, error }, createDocument] = useApi<any, any, IResponseError>({
        url: ApiEndpoint('book-section-document', 'create'),
        method: 'POST'
    });

    const onFormSubmit = async (data: object) => {
        await createDocument({
            data: {
                section: section?.id,
                ...data
            }
        }).then(() => {
            onClose(true);
        }).catch(() => null);
    }

    return (
        <Dialog maxWidth="xs" fullWidth open>
            <Paper
                elevation={2}
                sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}
                component={"form"}
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <Box marginY={'2px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography>{i18n('common:create', { name: section.title })}</Typography>
                    <CloseButton onClose={() => onClose(false)} />
                </Box>
                <Divider sx={{ marginY: '4px' }} />
                <NetworkStatus loading={loading} error={error} onRetry={() => null}>
                    <TextField
                        label={i18n('common:title')}
                        type="text"
                        margin="dense"
                        helperText={errors.title?.message}
                        {...register('title', {
                            required: { value: true, message: i18n('validation:required') },
                            minLength: { value: 1, message: i18n('validation:min', { min: 1 }) },
                            maxLength: { value: 50, message: i18n('validation:max', { max: 50 }) }
                        })}
                    />
                    <Button type="submit" color="secondary" variant="contained" disableElevation sx={{ marginTop: '4px' }}>{i18n('common:create', { name: '' })}</Button>
                </NetworkStatus>
            </Paper>
        </Dialog >
    );
}

export default BookSectionDocumentCreate;