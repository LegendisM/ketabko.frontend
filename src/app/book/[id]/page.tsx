import { FC, PropsWithChildren } from "react";

const Book: FC<PropsWithChildren & { params: { id: string } }> = ({ params: { id } }) => {
    return id;
}

export default Book;