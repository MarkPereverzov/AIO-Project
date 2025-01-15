'use client';
import { Header } from '@/widgets/header';
import { ExerciseHistory } from '@/features/sport/exerciseHistory/ui/ExerciseHistory';
import styles from '../page.module.css';
import { ExerciseDayDto } from '@/shared/models';
import { ResponsePlanExerciseDayDto } from '@/shared/models';
import { CreateExerciseDto } from '@/shared/models';
import { SaveExerciseRecord } from '@/features/sport/exerciseRecordCreation';
import { ExerciseRecordsStateProvider } from '@/features/sport/exerciseHistory';
import { ExerciseList } from '@/features/sport/exercises/ui/ExerciseList';
import { SaveExercise } from '@/features/sport/exerciseCreation';
import { ExerciseStateProvider } from '@/features/sport/exercises';

interface SportExerciseRecordPageProps {
  planDays?: ResponsePlanExerciseDayDto[] | null,
  historyDays?: ExerciseDayDto[] | null,
  exercises?: CreateExerciseDto[] | undefined,
}

export const SportExerciseRecordPage = ({planDays, historyDays, exercises: initExercises}: SportExerciseRecordPageProps) => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className={styles.pageContainer} style={{justifyContent: 'center', gap: '50px'}}>
        <ExerciseStateProvider init={initExercises!}>
        {({ exercises, addExercise, changeExercise, delExercise }) => (
          <ExerciseRecordsStateProvider init={historyDays!}>
            {({ historyDays, addExerciseRecord, updateExercise, deleteExercise }) => (
              <>
                <SaveExerciseRecord
                  exercises={exercises} // Список упражнений
                  onSave={(newExercise) => addExerciseRecord(0, newExercise)} // Добавляем в первый день
                />
                <ExerciseHistory
                  historyDays={historyDays}
                  onUpdateExercise={updateExercise}
                  onDeleteExercise={deleteExercise}
                />
              </>
            )}
          </ExerciseRecordsStateProvider>
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
