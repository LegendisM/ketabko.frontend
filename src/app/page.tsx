import BookCategoryItem from "@/components/book/category/book-category-item";
import BookCategory from "@/components/book/category/book-category.component";
import { FC, PropsWithChildren } from "react";

const Home: FC<PropsWithChildren> = () => {
  // TODO: fetch books with paginate and fill this categories
  return (
    <>
      <BookCategory name="رایگان استفاده کنید">
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png" />
      </BookCategory>

      <BookCategory name="ارزان تر از یک بستنی">
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png"
          mode="success" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png"
          mode="success" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png"
          mode="success" />
      </BookCategory>

      <BookCategory name="هرآنچه که باید منتظر آن باشید">
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png"
          mode="info" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png"
          mode="info" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png"
          mode="info" />
        <BookCategoryItem
          id="identifier"
          title="اثر مرکب"
          description="توضیحاتی بسی طولانی و زیبا که قراره در این بخش قرار بگیره"
          image="/images/book/book-flat.png"
          mode="info" />
      </BookCategory>
    </>
  );
}

export default Home;