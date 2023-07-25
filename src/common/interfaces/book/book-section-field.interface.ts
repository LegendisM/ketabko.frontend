export enum BookSectionFieldType {
    TEXT = 'text',
    NUMBER = 'number',
    DATE = 'date',
    TOGGLE = "toggle"
}

export interface IBookSectionField {
    type: BookSectionFieldType;
    index: number;
    identifier: string;
    placeholder: string;
    default: string;
}