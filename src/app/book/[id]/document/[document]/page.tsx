"use client"
import _ from "lodash";
import { FC, PropsWithChildren, useEffect } from "react";
import { IBookSectionDocument } from "@/common/interfaces/book/book-section-document.interface";
import { IResponseError } from "@/common/interfaces/common/error.interface";
import { useApi } from "@/common/services/axios.service";
import NetworkStatus from "@/components/common/network-status.component";
import { ApiEndpoint } from "@/constants/api.constant";
import { Box, Button, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { i18n } from "@/i18n/i18n";
import BookSectionDocumentField from "@/components/book/section/book-section-document-field.component";
import { AuthAccess } from "@/components/common/auth.component";
import { useSetState } from "react-use";
import { IBookSectionFieldValue } from "@/common/interfaces/book/book-section-field-value.interface";
import { convertDate } from "@/common/helpers/date.helper";

const BookSectionDocument: FC<PropsWithChildren & { params: { id: string, document: string } }> = ({ params: { id: book, document: id } }) => {
    const [values, setValues] = useSetState<Record<string, string>>({});
    const [{ data: document, loading: fetchLoading, error: fetchError }, fetchDocument] = useApi<IBookSectionDocument, any, IResponseError>({
        url: ApiEndpoint('book-section-document', 'find-one', { id })
    }, { manual: false });
    const [{ loading: updateLoading, error: updateError }, updateDocument] = useApi<IBookSectionDocument, any, IResponseError>({
        url: ApiEndpoint('book-section-document', 'update-one', { id }),
        method: 'PATCH'
    });

    useEffect(() => {
        if (document) {
            load(document);
        }
    }, [document]);

    const load = (documentData: IBookSectionDocument, force: boolean = false) => {
        for (const field of documentData.section.fields) {
            if (values[field.identifier] == null || force) {
                setValues({
                    [field.identifier]: documentData.values.filter(value => value.identifier == field.identifier)[0]?.value ?? field.default
                });
            }
        }
    }

    const onSaveDocument = async () => {
        const documentValues: IBookSectionFieldValue[] = _.map(values, (value, identifier) => ({ identifier, value: value.slice(0, 2000) }));
        await updateDocument({ data: { values: documentValues } })
            .then(({ status, data }) => {
                if (status == 200) {
                    load(data, true);
                }
            })
            .catch(() => null);
    }

    return (
        <AuthAccess isAuth defaultMessage={true}>
            <NetworkStatus loading={fetchLoading} error={fetchError} backHref={`/book/${book}`} onRetry={fetchDocument}>
                <NetworkStatus loading={updateLoading} error={updateError} backHref={`/book/${book}`} onRetry={onSaveDocument}>
                    <Container sx={{ padding: '15px' }}>
                        <Paper sx={{ padding: '15px' }}>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
                                <Box overflow={'auto'}>
                                    <Typography fontWeight={'bold'}>{document?.title}</Typography>
                                    <Typography variant="caption">({document?.section.title})</Typography>
                                </Box>
                                <Typography>{convertDate(document?.createdAt ?? '')}</Typography>
                            </Box>
                            <Divider sx={{ marginY: '12px' }} />
                            {
                                document ?
                                    _.map(_.groupBy(document?.section?.fields, (field) => field.group), (fields, group) =>
                                        <Box key={group} marginY={'4px'}>
                                            <Typography marginBottom={'4px'}>{group}</Typography>
                                            {
                                                _.map(_.groupBy(fields, (field) => field.row), (fields, groupIndex) => (
                                                    <Stack key={groupIndex} direction={'row'} alignItems={'baseline'} gap={1}>
                                                        {
                                                            fields.map((field, index) => (
                                                                <BookSectionDocumentField
                                                                    key={index}
                                                                    field={field}
                                                                    value={values[field.identifier]}
                                                                    onChange={({ identifier, value }) => {
                                                                        setValues({ [identifier]: value });
                                                                    }}
                                                                />
                                                            ))
                                                        }
                                                    </Stack>
                                                ))
                                            }
                                        </Box>
                                    )
                                    : null
                            }
                            <Button
                                color="secondary"
                                variant="contained"
                                disableElevation sx={{ marginTop: '6px' }}
                                fullWidth
                                onClick={onSaveDocument}
                            >
                                {i18n('common:save')}
                            </Button>
                        </Paper>
                    </Container>
                </NetworkStatus>
            </NetworkStatus>
        </AuthAccess>
    );
}

export default BookSectionDocument;