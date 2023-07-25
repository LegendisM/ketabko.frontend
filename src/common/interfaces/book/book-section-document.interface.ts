import { IBookSectionFieldValue } from "./book-section-field-value.interface";

export interface IBookSectionDocument {
    id: string;
    title: string;
    values: IBookSectionFieldValue[];
    createdAt: Date;
}