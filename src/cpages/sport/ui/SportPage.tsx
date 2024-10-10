'use client';
import { Header } from '@/widgets/header';
import { Program } from '@/widgets/program';
import { ProductDtoResponse } from '@/shared/models';

interface BudgetPageProps {
  products: ProductDtoResponse[] | null
}

export const SportPage = ({products}: BudgetPageProps) => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className='pageContainer'>
        <div className="gridContainer">
          <Program products={products}/>
        </div>
      </div>
    </>
  );
};