'use client';
import { Program } from '@/widgets/program';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Exercise } from '@/features/exerciseButton';

export const SportPage = () => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className='pageContainer'>
        <div className="gridContainer">
          <Program/>
        </div>
        <Footer>
          <Exercise/>
        </Footer>
      </div>
    </>
  );
};
