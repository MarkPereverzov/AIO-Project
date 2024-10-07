'use client';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import React from 'react';
import { PlanExerciseElement, AnalysedExercise } from '@/widgets/sport';
import { ExerciseDayDto, ResponsePlanExerciseDto } from '@/shared/models';
import { ResponseAnalysisDayDto } from '@/shared/models';
import { DayExerciseBlock } from '@/widgets/sport';
import { CreateExerciseRecord } from '@/features/sport/ui/CreateExerciseRecord';

interface SportPageProps {
  analysedExercises: ResponseAnalysisDayDto | null,
  planExercises: ResponsePlanExerciseDto[] | null,  
  exerciseRecordDays: ExerciseDayDto[] | null,
}

export const SportPage = ({analysedExercises, planExercises, exerciseRecordDays}: SportPageProps) => {
  return (
    <>
      <Header pageName="Спорт" />
      <div className='pageContainer'>
          <div className="gridContainer">
            <AnalysedExercise analysedExercises={analysedExercises}/>
            <DayExerciseBlock days={exerciseRecordDays}/>
            <PlanExerciseElement planExercises={planExercises}/>
          </div>
          <Footer>
            <CreateExerciseRecord/>
          </Footer> 
      </div>
    </>
  );
};
