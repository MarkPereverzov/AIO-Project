'use client';
import { Header } from '@/widgets/header';
import { ExerciseHistory } from '@/features/sport/exerciseHistory/ui/ExerciseHistory';
import styles from '../page.module.css';
import { ExerciseDayDto } from '@/shared/models';
import { ResponsePlanExerciseDayDto } from '@/shared/models';
import { CreateExerciseDto } from '@/shared/models';
import { SaveExerciseRecord } from '@/features/sport/exerciseRecordCreation';
import { ExerciseStateProvider } from '@/features/sport/exerciseHistory';
import { ExerciseList } from '@/features/sport/exercises/ui/ExerciseList';
import { SaveExercise } from '@/features/sport/exerciseCreation';

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
            <ExerciseList
              exercises={exercises!}
            />
            <SaveExercise 
              exercises={exercises}
            />
            {/* <SaveExerciseRecord
                exercises={exercises} // Список упражнений
                onSave={(newExercise) => addExercise(0, newExercise)} // Добавляем в первый день
              /> */}
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
