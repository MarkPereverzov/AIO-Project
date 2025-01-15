'use client';
//import { Plan } from 'plan-ignore';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { ExerciseHistory } from '@/features/sport/exerciseHistory/ui/ExerciseHistory';
import styles from '../page.module.css';
import { ExerciseDayDto } from '@/shared/models';
import { ResponsePlanExerciseDayDto } from '@/shared/models';
import { CreateExerciseDto } from '@/shared/models';
import { SaveExerciseRecord, CreateExerciseRecord } from '@/features/sport/exerciseRecordCreation';
import { ExerciseRecordsStateProvider } from '@/features/sport/exerciseHistory';

interface SportPageProps {
  planDays?: ResponsePlanExerciseDayDto[] | null,
  exercises?: CreateExerciseDto[] | undefined,
}

export const SportPlanPage = ({planDays, exercises}: SportPageProps) => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className={styles.pageContainer} style={{justifyContent: 'center', gap: '50px'}}>
        {/* {<Plan planDays={planDays!}/> } */}
      </div>
    </>
  );
};
