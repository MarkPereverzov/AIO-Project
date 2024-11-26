'use client';
import { Plan } from '@/widgets/sport/ui/Plan';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Exercise } from '@/features/exerciseButton';
import { ExerciseHistory } from '@/widgets/sport/ui/ExerciseHistory';
import { ExerciseInput } from '@/widgets/sport/ui/ExerciseInput';
import styles from '../page.module.css';
import { ExerciseDayDto } from '@/shared/models';
import { ResponsePlanExerciseDayDto } from '@/shared/models';
import { ResponseExerciseRecordDto } from '@/shared/models';
import { toLocaleDateString } from '@/shared/lib';

const example = [
  {
    weekDay: 'Грудь - Трицепс',
    planExercises: [
      {exercise: {name: "Жим груди"}, sets: [{weight: 40, reps: 12}]},
      {exercise: {name: "Бабочка"}, sets: [{weight: 60, reps: 12}]},
    ]
  } as any,
  {
    weekDay: 'Спина - бицепс',
  } as ResponsePlanExerciseDayDto,
  {
    weekDay: 'Ноги - Плечи',
  } as ResponsePlanExerciseDayDto,
]

const example2 = [
  {
    id: 1,
    userId: '',
    date : new Date().toJSON(),
    exerciseRecords: 
    [
      {id: 1, exercise: "Жим груди", weight: 40, reps: 12, exerciseDayId: 1},
      {id: 2, exercise: "Жим груди", weight: 60, reps: 12, exerciseDayId: 1},
    ],
  } as ExerciseDayDto,
  {
    date : new Date("11-20-2024").toJSON(),
    exerciseRecords: 
    [
      {id: 3, exercise: "Жим груди", weight: 70, reps: 12},
      {id: 4, exercise: "Жим груди", weight: 80, reps: 12},
    ],
  } as ExerciseDayDto
]

interface SportPageProps {
  planDays?: ResponsePlanExerciseDayDto[] | null,
  historyDays?: ExerciseDayDto[] | null
}

export const SportPage = ({planDays, historyDays}: SportPageProps) => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className={styles.pageContainer} style={{justifyContent: 'center', gap: '50px'}}>
        <Plan planDays={planDays ?? example}/>
        <ExerciseHistory historyDays={historyDays ?? example2 as any}/>
      </div>
      {/* <Footer>
        <Exercise/>
      </Footer> */}
    </>
  );
};
