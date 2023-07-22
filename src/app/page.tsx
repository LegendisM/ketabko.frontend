"use client"
import _ from "lodash";
import { IBook } from "@/common/interfaces/book.interface";
import { IPagination } from "@/common/interfaces/pagination";
import { useApi } from "@/common/services/axios.service";
import BookCategoryItem from "@/components/book/category/book-category-item";
import BookCategory from "@/components/book/category/book-category.component";
import { ApiEndpoint } from "@/constants/api.constant";
import { FC, PropsWithChildren } from "react";
import Loading from "@/components/common/loading";

const Home: FC<PropsWithChildren> = () => {
  const [{ data: books, loading }, fetchBooks] = useApi<IPagination<IBook>>({
    url: ApiEndpoint('book', 'all'),
    params: { page: 1, limit: 20 }
  }, { manual: false });

  return (
    <Loading loading={loading}>
      <BookCategory name="رایگان استفاده کنید">
        {
          books?.items.map((book) => (
            <BookCategoryItem
              id={book.id}
              title={book.title}
              description={book.description}
              image={`${ApiEndpoint('main', 'storage')}/${book.cover.path}`}
              mode="info"
            />
          ))
        }
      </BookCategory>

      <BookCategory name="ارزان تر از یک بستنی">
        {
          _.shuffle(books?.items.map((book) => (
            <BookCategoryItem
              id={book.id}
              title={book.title}
              description={book.description}
              image={`${ApiEndpoint('main', 'storage')}/${book.cover.path}`}
              mode="success"
            />
          )))
        }
      </BookCategory>

      <BookCategory name="هرآنچه که باید منتظر آن باشید">
        {
          _.shuffle(books?.items.map((book) => (
            <BookCategoryItem
              id={book.id}
              title={book.title}
              description={book.description}
              image={`${ApiEndpoint('main', 'storage')}/${book.cover.path}`}
              mode="secondary"
            />
          )))
        }
      </BookCategory>
    </Loading>
  );
}

export default Home;