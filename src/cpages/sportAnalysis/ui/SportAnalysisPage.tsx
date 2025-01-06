'use client';
import { Header } from '@/widgets/header';
import { CreateExerciseDto } from '@/shared/models';
import styles from '../page.module.css';
import { ChartWidget } from '@/widgets/chartWidget';

interface SportAnalysisPageProps {
  exercises?: CreateExerciseDto[] | undefined;
}

export const SportanalysisPage = ({exercises}: SportAnalysisPageProps) => {
  
  return (
    <>
      <Header pageName="Спорт Аналитика" />
      <div className={styles.pageContainer} style={{justifyContent: 'center', gap: '50px'}}>
        <ChartWidget exercises={exercises}/>
      </div>
      {/* <Footer>
        <Exercise/>
      </Footer> */}
    </>
  );
};
