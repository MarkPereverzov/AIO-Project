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
            <CreateTag/>
          </Footer>
      </div>
    </>
  );
};
