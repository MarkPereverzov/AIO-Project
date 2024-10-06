import { ExerciseRow } from "@/features/sport";
import { ResponseExerciseRecordDto } from "@/shared/models";
import { Table } from "react-bootstrap";

interface DayExerciseElementProps {
  exerciseRecords: ResponseExerciseRecordDto[] | null,
};

export const DayExerciseElement = ({exerciseRecords}: DayExerciseElementProps) => {
  const exerciseRows = exerciseRecords?.map((exerciseRecord, index) => (
    <ExerciseRow 
      key={index} 
      exercise={exerciseRecord.exercise}
      weight={exerciseRecord.weight}
      reps={exerciseRecord.reps}
    />
  ));
  return (
    <tbody>
      {exerciseRows}
    </tbody>
  );
};