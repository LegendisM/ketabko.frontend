import { IBookSectionFieldValue } from "./book-section-field-value.interface";
import { IBookSection } from "./book-section.interface";

export interface IBookSectionDocument {
    id: string;
    title: string;
    values: IBookSectionFieldValue[];
    createdAt: Date;
    section: IBookSection;
}