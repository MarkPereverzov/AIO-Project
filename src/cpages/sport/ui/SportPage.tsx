'use client';
import { Plan } from '@/widgets/sport/ui/Plan';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Exercise } from '@/features/exerciseButton';
import { ExerciseHistory } from '@/widgets/sport/ui/ExerciseHistory';
import { ExerciseInput } from '@/widgets/sport/ui/ExerciseInput';
import styles from '../page.module.css';
import { ResponseAnalysisDayDto } from '@/shared/models';
import { ResponseAnalysisExerciseDto } from '@/shared/models';


interface ExerciseHistoryProps { 
  date: Date,
  planExercises: ResponseAnalysisExerciseDto[],
}


const example = [
  {
    weekDay: 'Грудь - Трицепс',
    planExercises: [
      [
        {exercise: "Жим груди", weight: 40, reps: 12},
        {exercise: "Жим груди", weight: 50, reps: 12},
        {exercise: "Жим груди", weight: 55, reps: 12},
        {exercise: "Жим груди", weight: 55, reps: 12},
        {exercise: "Жим груди", weight: 60, reps: 12},
      ],
      [
        {exercise: "Бабочка", weight: 40, reps: 12},
        {exercise: "Бабочка", weight: 50, reps: 12},
        {exercise: "Бабочка", weight: 55, reps: 12},
        {exercise: "Бабочка", weight: 55, reps: 12},
        {exercise: "Бабочка", weight: 60, reps: 12},
      ],
    ]
  } as ResponseAnalysisDayDto,
  {
    weekDay: 'Спина - бицепс',
  } as ResponseAnalysisDayDto,
  {
    weekDay: 'Ноги - Плечи',
  } as ResponseAnalysisDayDto,
]

const example2 = [
  {
    date : new Date(),
    planExercises: 
    [
      {exercise: "Жим груди", weight: 40, reps: 12},
      {exercise: "Жим груди", weight: 60, reps: 12},
    ],
  } as ExerciseHistoryProps,
  {
    date : new Date(new Date("11-20-2024")),
    planExercises: 
    [
      {exercise: "Жим груди", weight: 70, reps: 12},
      {exercise: "Жим груди", weight: 80, reps: 12},
    ],
  } as ExerciseHistoryProps
]

export const SportPage = () => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className={styles.pageContainer}>
        <div className={styles.combinedContainer}>
          <Plan planDays={example}/>
          <ExerciseInput/>
        </div>
        <ExerciseHistory historyDays={example2 as any}/>
      </div>
      {/* <Footer>
        <Exercise/>
      </Footer> */}
    </>
  );
};
