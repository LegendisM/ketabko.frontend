"use client"
import _ from "lodash";
import { FC, PropsWithChildren } from "react";
import { IBookSectionDocument } from "@/common/interfaces/book/book-section-document.interface";
import { IResponseError } from "@/common/interfaces/common/error.interface";
import { useApi } from "@/common/services/axios.service";
import NetworkStatus from "@/components/common/network-status.component";
import { ApiEndpoint } from "@/constants/api.constant";
import { Box, Button, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { i18n } from "@/i18n/i18n";
import { CloseButton } from "@/components/common/buttons.component";
import { useRouter } from "next/navigation";
import BookSectionDocumentField from "@/components/book/section/book-section-document-field.component";
import { AuthAccess } from "@/components/common/auth.component";

const BookSectionDocument: FC<PropsWithChildren & { params: { id: string, document: string } }> = ({ params: { id: book, document: id } }) => {
    const router = useRouter();
    const [{ data: document, loading, error }, fetchDocument] = useApi<IBookSectionDocument, any, IResponseError>({
        url: ApiEndpoint('book-section-document', 'find-one', { id })
    }, { manual: false });

    return (
        <AuthAccess isAuth defaultMessage={true}>
            <NetworkStatus loading={loading} error={error} onRetry={fetchDocument}>
                <Container sx={{ padding: '15px' }}>
                    <Paper sx={{ padding: '15px' }}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
                            <Box overflow={'auto'}>
                                <Typography fontWeight={'bold'}>{document?.title}</Typography>
                                <Typography variant="caption">({document?.section.title})</Typography>
                            </Box>
                            <CloseButton
                                onClose={() => router.push(`/book/${book}`)}
                            />
                        </Box>
                        <Divider sx={{ marginY: '12px' }} />
                        {
                            document ?
                                _.map(_.groupBy(document?.section?.fields, (field) => field.group), (fields, group) =>
                                    <Box marginY={'6px'}>
                                        <Typography marginBottom={'4px'}>{group}</Typography>
                                        {
                                            _.map(_.groupBy(fields, (field) => field.row), (fields) => (
                                                <Stack direction={'row'} alignItems={'baseline'} gap={1}>
                                                    {
                                                        fields.map((field) => (
                                                            <BookSectionDocumentField field={field} values={document.values} />
                                                        ))
                                                    }
                                                </Stack>
                                            ))
                                        }
                                    </Box>
                                )
                                : null
                        }
                        <Button color="secondary" variant="contained" disableElevation sx={{ marginTop: '6px' }} fullWidth>{i18n('common:save')}</Button>
                    </Paper>
                </Container>
            </NetworkStatus>
        </AuthAccess>
    );
}

export default BookSectionDocument;