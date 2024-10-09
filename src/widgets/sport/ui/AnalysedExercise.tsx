import { ExerciseRow } from "../";
import { ResponseAnalysisDayDto } from "@/shared/models/response-analysis-day.dto";
import { Table } from "react-bootstrap";
import { ExerciseBlock } from "./ExerciseBlock";

interface AnalysedExerciseProps {
  analysedExercises: ResponseAnalysisDayDto | null,
};

export const AnalysedExercise = ({analysedExercises}: AnalysedExerciseProps) => {
  const planExercises = analysedExercises?.planExercises;

  return (
    <ExerciseBlock
      exercises={
        planExercises?.map(({planExerciseSet}: any, index) => {
          return planExerciseSet?.map((planExercise: any, i: any) => (
              <ExerciseRow 
                key={index * planExercises.length + i} 
                exercise={planExercise.exercise}
                weight={planExercise.weight}
                reps={planExercise.reps}
            />
          ))
        }).flat()
      }
    />  
  );
};