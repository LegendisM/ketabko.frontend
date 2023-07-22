import { IAuthor } from "./author.interface";
import { IBookSection } from "./book-section.interface";
import { ICategory } from "./category.interface";
import { IStorageFile } from "./storage-file.interface";

export interface IBook {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: IStorageFile;
    sections: IBookSection[];
    author: IAuthor;
    categories: ICategory[];
}