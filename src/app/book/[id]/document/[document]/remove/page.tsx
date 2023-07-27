"use client"
import { IResponseError } from "@/common/interfaces/common/error.interface";
import { useApi } from "@/common/services/axios.service";
import { AuthAccess } from "@/components/common/auth.component"
import NetworkStatus from "@/components/common/network-status.component";
import { ApiEndpoint } from "@/constants/api.constant";
import { i18n } from "@/i18n/i18n";
import { Alert, Container } from "@mui/material";
import { useRouter } from "next/navigation"
import { FC, useEffect } from "react"

const BookSectionDocumentRemove: FC<{ params: { id: string, document: string } }> = ({ params: { id: book, document: id } }) => {
    const router = useRouter();
    const [{ response, loading, error }, deleteDocument] = useApi<any, any, IResponseError>({
        url: ApiEndpoint('book-section-document', 'remove-one', { id }),
        method: 'DELETE'
    }, { manual: false });

    useEffect(() => {
        if (response?.status == 200) {
            setTimeout(() => router.push(`/book/${book}`), 1250);
        }
    }, [response?.status]);

    return (
        <AuthAccess isAuth defaultMessage={true}>
            <NetworkStatus loading={loading} error={error} backHref={`/book/${book}`} onRetry={deleteDocument}>
                <Container maxWidth="sm" sx={{ padding: '15px' }}>
                    <Alert> {i18n("messages:successfully-removed")}</Alert>
                </Container>
            </NetworkStatus>
        </AuthAccess>
    )
}

export default BookSectionDocumentRemove;