'use client';
import { Plan } from '@/widgets/sport/ui/Plan';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Exercise } from '@/features/exerciseButton';

export const SportPage = () => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className='pageContainer' style={{justifyContent: 'flex-start'}}>
          <Plan/>
        <Footer>
          <Exercise/>
        </Footer>
      </div>
    </>
  );
};
