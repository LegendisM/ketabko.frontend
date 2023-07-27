import { IBookSectionField } from "./book-section-field.interface";

export interface IBookSection {
    id: string;
    title: string;
    fields: IBookSectionField[];
}