'use client';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import React from 'react';
import { DayExerciseElement, PlanExercise, AnalysedExercise } from '@/widgets/sport';
import { ResponseAnalysisExerciseDto, ExerciseDayDto, ResponsePlanExerciseDto } from '@/shared/models';
import { ResponseAnalysisDayDto } from '@/shared/models';
import { DayExerciseBlock } from '@/widgets/sport';

interface SportPageProps {
  analysedExercises: ResponseAnalysisDayDto | null,
  planExercises: ResponsePlanExerciseDto[] | null,
  exerciseRecordDays: ExerciseDayDto[] | null,
}

export const SportPage = ({analysedExercises, planExercises, exerciseRecordDays}: SportPageProps) => {
  
  //console.log(analysedExercises, planExercises, exerciseRecordDays);
  return (
    <>
      <Header pageName="Спорт" />
      <div className='pageContainer'>
          <div className="gridContainer">
            <AnalysedExercise analysedExercises={analysedExercises}/>
            <DayExerciseBlock days={exerciseRecordDays}/>
            <PlanExercise planExercises={planExercises}/>
          </div>
          <Footer/>
      </div>
    </>
  );
};
