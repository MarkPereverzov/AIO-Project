'use client';
import { Filters } from '@/widgets/filters';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import React from 'react';
import { Transaction } from '@/widgets/transactions';
import { CategoryDtoResponse, ProductDtoResponse, TagDtoResponse } from '@/shared/models';
import { CreateTag } from '@/features/createTag';

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

  console.log(tags, categories, products);

  return (
    <>
      <Header pageName="Бюджет" />
      <div className='pageContainer'>
          <div className="gridContainer">
            <Filters tags={tags} categories={categories} />
            <Transaction products={products} />
          </div>
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
