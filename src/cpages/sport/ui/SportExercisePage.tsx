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

interface SportPageProps {
  exercises?: CreateExerciseDto[] | undefined,
}

export const SportExercisePage = ({exercises: initExercises}: SportPageProps) => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className={styles.pageContainer} style={{justifyContent: 'center', gap: '50px'}}>
        <ExerciseStateProvider init={initExercises!}>
            {({ exercises, addExercise, changeExercise, delExercise }) => (
                <>
                    <SaveExercise
                        onSave={addExercise} 
                        exercises={exercises}
                    />
                    <ExerciseList
                        onDeleteExercise={delExercise}
                        onUpdateExercise={changeExercise}
                        exercises={exercises!}
                    />
                </>
            )}
        </ExerciseStateProvider>
      </div>
    </>
  );
};
