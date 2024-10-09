'use client';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Program } from '@/widgets/program';

export const SportPage = () => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className='pageContainer'>
        <div className="gridContainer">
          <Program />
        </div>
        <Footer/>
      </div>
    </>
  );
};
