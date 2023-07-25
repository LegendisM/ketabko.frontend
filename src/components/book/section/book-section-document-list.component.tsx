"use client"
import { i18n } from "@/i18n/i18n";
import { FC, PropsWithChildren } from "react";
import { IBookSection } from "@/common/interfaces/book/book-section.interface";
import { IResponseError } from "@/common/interfaces/common/error.interface";
import { useApi } from "@/common/services/axios.service";
import NetworkStatus from "@/components/common/network-status.component";
import { ApiEndpoint } from "@/constants/api.constant";
import { Box, Card, Dialog, Divider, Paper, Stack, Typography } from "@mui/material";
import { CloseButton } from "@/components/common/buttons.component";
import { IPagination } from "@/common/interfaces/common/pagination";
import { IBookSectionDocument } from "@/common/interfaces/book/book-section-document.interface";

const BookSectionDocumentList: FC<PropsWithChildren & { section: IBookSection, onClose: Function }> = ({ section, onClose }) => {
    const [{ data: documents, loading, error }, fetchDocuments] = useApi<IPagination<IBookSectionDocument>, any, IResponseError>({
        url: ApiEndpoint('book-section-document', 'find-all-by-section', { section: section.id }),
        method: 'GET',
        params: {
            page: 1,
            limit: 100
        }
    }, { manual: false });

    return (
        <Dialog maxWidth="xs" fullWidth open>
            <Paper
                elevation={2}
                sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}
            >
                <Box marginY={'2px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography>{i18n('common:list', { name: section.title })}</Typography>
                    <CloseButton onClose={onClose} />
                </Box>
                <Divider sx={{ marginY: '4px', marginBottom: '12px' }} />
                <NetworkStatus loading={loading} error={error} onRetry={fetchDocuments}>
                    <Stack gap={1.25}>

                        {
                            documents?.items.map((document) => (
                                <Card sx={{ padding: '6px' }}>
                                    <Typography>{document.title}</Typography>
                                </Card>
                            ))
                        }
                    </Stack>
                </NetworkStatus>
            </Paper>
        </Dialog >
    );
}

export default BookSectionDocumentList;