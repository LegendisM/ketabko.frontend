export enum BookSectionFieldType {
    TEXT = 'text',
    TEXTAREA = 'textarea',
    NUMBER = 'number',
    DATE = 'date',
    CHECKBOX = "checkbox"
}

export interface IBookSectionField {
    type: BookSectionFieldType;
    identifier: string;
    label: string;
    placeholder: string;
    helper: string;
    default: string;
    group: string;
    row: number;
}