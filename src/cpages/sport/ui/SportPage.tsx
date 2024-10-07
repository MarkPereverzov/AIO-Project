'use client';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import React from 'react';
import { BiSolidCog, BiSolidCustomize, BiSolidRightArrow, BiSolidPin } from "react-icons/bi";
import { DayExerciseElement, PlanExerciseElement, AnalysedExercise } from '@/widgets/sport';
import { ResponseAnalysisExerciseDto, ExerciseDayDto, ResponsePlanExerciseDto } from '@/shared/models';
import { ResponseAnalysisDayDto } from '@/shared/models';
import { DayExerciseBlock } from '@/widgets/sport';
import { CreateExerciseRecord } from '@/features/sport/ui/CreateExerciseRecord';
import { Subscribe } from '@/features/subscribe';
import { CreateTag } from '@/features/createTag';
import { PlayModal } from '@/features/playModal';

interface SportPageProps {
  analysedExercises: ResponseAnalysisDayDto | null,
  planExercises: ResponsePlanExerciseDto[] | null,  
  exerciseRecordDays: ExerciseDayDto[] | null,
}

export const SportPage = ({analysedExercises, planExercises, exerciseRecordDays}: SportPageProps) => {
  
  //console.log(analysedExercises, planExercises, exerciseRecordDays);
  const buttons = [
    {element: <CreateExerciseRecord/>, icon: <BiSolidCog/>},
    // {element: <Subscribe/>, icon: <BiSolidCog/>},
    // {element: <PlayModal/>, icon: <BiSolidRightArrow/>},
    // {element: <CreateTag/>, icon: <BiSolidCustomize/>},
  ];

  return (
    <>
      <Header pageName="Спорт" />
      <div className='pageContainer'>
          <div className="gridContainer">
            <AnalysedExercise analysedExercises={analysedExercises}/>
            <DayExerciseBlock days={exerciseRecordDays}/>
            <PlanExerciseElement planExercises={planExercises}/>
          </div>
          <Footer 
            items={buttons}
          />
      </div>
    </>
  );
};
