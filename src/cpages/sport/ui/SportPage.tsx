'use client';
import { Plan } from '@/widgets/sport/ui/Plan';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { ExerciseHistory } from '@/features/sport/exerciseHistory/ui/ExerciseHistory';
import styles from '../page.module.css';
import { ExerciseDayDto } from '@/shared/models';
import { ResponsePlanExerciseDayDto } from '@/shared/models';
import { CreateExerciseDto } from '@/shared/models';
import { SaveExercise, CreateExerciseRecord } from '@/features/sport/exerciseRecordCreation';
import { ExerciseStateProvider } from '@/features/sport/exerciseHistory';

interface SportPageProps {
  planDays?: ResponsePlanExerciseDayDto[] | null,
  historyDays?: ExerciseDayDto[] | null,
  exercises?: CreateExerciseDto[] | undefined,
}

export const SportPage = ({planDays, historyDays, exercises}: SportPageProps) => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className={styles.pageContainer} style={{justifyContent: 'center', gap: '50px'}}>
        <ExerciseStateProvider init={historyDays!}>
          {({ historyDays, addExercise, updateExercise, deleteExercise }) => (
            <>
            <CreateExerciseRecord 
              exercises={exercises}
              onSave={(newExercise) => addExercise(0, newExercise)}
            />
            <SaveExercise
                exercises={exercises} // Список упражнений
                onSave={(newExercise) => addExercise(0, newExercise)} // Добавляем в первый день
              />
              <ExerciseHistory
                historyDays={historyDays}
                onUpdateExercise={updateExercise}
                onDeleteExercise={deleteExercise}
              />
            </>
          )}
        </ExerciseStateProvider>
        {/* <Plan planDays={planDays ?? example}/> */}
      </div>
      {/* <Footer>
        <Exercise/>
      </Footer> */}
    </>
  );
};
