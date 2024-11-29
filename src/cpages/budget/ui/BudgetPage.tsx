'use client';
import { Filters } from '@/widgets/filters';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import React from 'react';
import { Transaction } from '@/widgets/transactions';
import { CategoryDtoResponse, ProductDtoResponse, TagDtoResponse } from '@/shared/models';
import { CreateTag } from '@/features/createTag';
import { CreateProduct } from '@/features/createProduct';

interface BudgetPageProps {
  tags: TagDtoResponse[] | null,
  categories: CategoryDtoResponse[] | null,
  products: ProductDtoResponse[] | null,
}

export const BudgetPage = ({tags, categories, products}: BudgetPageProps) => {
  const categories_uf = [
    { name: 'Продукты', id: 1 },
    { name: 'Здоровье', id: 2 },
    { name: 'Спорт', id: 3 },
    { name: 'Одежда', id: 4 },
    { name: 'Кафе и рестораны', id: 5 },
    { name: 'Путешествия', id: 6 },
    { name: 'Книги', id: 7 },
    { name: 'Такси', id: 8 },
  ];

  const tag_uf = {
    name: 'tag',
    color: '#ffff00',
    id: 1,
    userId: "",
    categories: categories_uf[0]
  }

  const products_uf = [
    { id: 1, name: 'Name', tags: [tag_uf, tag_uf, tag_uf], date: '01-01-2020', price: 100},
    { id: 2, name: 'Name', tags: [tag_uf], date: '01-01-2020', price: 100},
    { id: 3, name: 'Name', tags: [tag_uf], date: '02-01-2020', price: 100},
    { id: 4, name: 'Name', tags: [tag_uf], date: '02-01-2020', price: 100},
  ];

  console.log(tags, categories, products);

  return (
    <>
      <Header pageName="Бюджет" />
      <div className='pageContainer'>
          <Filters tags={tags} categories={categories} />
          <Transaction products={products ? products : products_uf as any} />
          <Footer>
            <CreateTag 
              categories={categories ? categories : categories_uf}
            />
            <CreateProduct 
              tags={tags}
              categories={categories}
            />
          </Footer>
      </div>
    </>
  );
};
