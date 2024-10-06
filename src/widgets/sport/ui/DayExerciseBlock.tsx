import { ExerciseDayDto, ResponseExerciseRecordDto } from "@/shared/models";
import { Table } from "react-bootstrap";
import { DayExerciseElement } from "./DayExerciseElement";

interface DayExerciseBlockProps {
  days: ExerciseDayDto[] | null,
};

export const DayExerciseBlock = ({days}: DayExerciseBlockProps) => {
  return (
    <div>
      {
        days?.map((day, index) => (
          <DayExerciseElement 
            key={index}
            exerciseRecords={day.exerciseRecords}
          />
        ))
      }
    </div>
  );
};