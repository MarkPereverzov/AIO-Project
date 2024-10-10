'use client';
import { Program } from '@/widgets/program';
import { ProductDtoResponse } from '@/shared/models';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Exercise } from '@/features/exerciseButton';
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
        <Footer>
          <Exercise/>
        </Footer>
      </div>
    </>
  );
};
