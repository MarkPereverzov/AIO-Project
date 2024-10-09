import { ExerciseBlock } from "./ExerciseBlock";
import { ExerciseRow } from "../";
import { ResponseExerciseRecordDto } from "@/shared/models";

interface DayExerciseElementProps {
  exerciseRecords: ResponseExerciseRecordDto[] | null,
};

export const DayExerciseElement = ({exerciseRecords}: DayExerciseElementProps) => {
  return (
    <ExerciseBlock
      exercises={exerciseRecords?.map((exerciseRecord, index) => (
        <ExerciseRow
          key={index}
          exercise={exerciseRecord.exercise}
          weight={exerciseRecord.weight}
          reps={exerciseRecord.reps}
        />
      ))}
    />
  );
};