import { ExerciseRow } from "@/features/sport";
import { ResponseAnalysisExerciseDto } from "@/shared/models";
import { ResponseAnalysisDayDto } from "@/shared/models/response-analysis-day.dto";
import { Table } from "react-bootstrap";

interface AnalysedExerciseProps {
  analysedExercises: ResponseAnalysisDayDto | null,
};

export const AnalysedExercise = ({analysedExercises}: AnalysedExerciseProps) => {
  const planExercises = analysedExercises?.planExercises;
  const exerciseRows = planExercises?.map(({planExerciseSet}: any, index) => {
    return planExerciseSet?.map((planExercise: any, i: any) => (
        <ExerciseRow 
          key={index * planExercises.length + i} 
          exercise={planExercise.exercise}
          weight={planExercise.weight}
          reps={planExercise.reps}
      />
    ))
  });
  return (
    <Table striped hover variant="light">
      <tbody>
        {exerciseRows?.flat()}
      </tbody>
    </Table>
  );
};