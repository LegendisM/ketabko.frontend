import { AuthAccess } from "@/components/common/auth.component"
import { FC } from "react"

const BookSectionDocumentRemove: FC<{ params: { document: string } }> = ({ params: { document } }) => {
    return (
        <AuthAccess isAuth defaultMessage={true}>
            {
                // TODO: remove by document
            }
        </AuthAccess>
    )
}

export default BookSectionDocumentRemove;