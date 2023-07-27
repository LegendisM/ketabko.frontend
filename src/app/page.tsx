"use client"
import _ from "lodash";
import { IBook } from "@/common/interfaces/book/book.interface";
import { IPagination } from "@/common/interfaces/common/pagination";
import { useApi } from "@/common/services/axios.service";
import BookCategoryItem from "@/components/book/category/book-category-item";
import BookCategory from "@/components/book/category/book-category.component";
import { ApiEndpoint } from "@/constants/api.constant";
import { FC, PropsWithChildren } from "react";
import NetworkStatus from "@/components/common/network-status.component";
import { Container } from "@mui/material";

const Home: FC<PropsWithChildren> = () => {
  const [{ data: books, loading, error }, fetchBooks] = useApi<IPagination<IBook>>({
    url: ApiEndpoint('book', 'all'),
    params: { page: 1, limit: 100 }
  }, { manual: false });

  return (
    <NetworkStatus loading={loading} error={error} onRetry={fetchBooks}>
      <Container maxWidth={"xl"}>
        <BookCategory name="رایگان استفاده کنید">
          {
            books?.items.map((book, index) => (
              <BookCategoryItem
                key={index}
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
            _.shuffle(books?.items.map((book, index) => (
              <BookCategoryItem
                key={index}
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
            _.shuffle(books?.items.map((book, index) => (
              <BookCategoryItem
                key={index}
                id={book.id}
                title={book.title}
                description={book.description}
                image={`${ApiEndpoint('main', 'storage')}/${book.cover.path}`}
                mode="secondary"
              />
            )))
          }
        </BookCategory>
      </Container>
    </NetworkStatus>
  );
}

export default Home;