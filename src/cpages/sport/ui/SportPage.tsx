'use client';
import { Plan } from '@/widgets/sport/ui/Plan';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Exercise } from '@/features/exerciseButton';
import { ExerciseHistory } from '@/widgets/sport/ui/ExerciseHistory';
import { ExerciseInput } from '@/widgets/sport/ui/ExerciseInput';
import styles from '../page.module.css';

export const SportPage = () => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className={styles.pageContainer}>
        <div className={styles.combinedContainer}>
          <Plan/>
          <ExerciseInput/>
        </div>
        <ExerciseHistory/>
      </div>
      {/* <Footer>
        <Exercise/>
      </Footer> */}
    </>
  );
};
