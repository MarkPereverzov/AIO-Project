import { ExerciseRow } from "@/features/sport";
import { ExerciseDayDto, ResponseExerciseRecordDto } from "@/shared/models";
import { Table } from "react-bootstrap";
import { DayExerciseElement } from "./DayExerciseElement";

interface DayExerciseBlockProps {
  days: ExerciseDayDto[] | null,
};

export const DayExerciseBlock = ({days}: DayExerciseBlockProps) => {
  const dayElements = days?.map((day, index) => (
    <Table striped hover variant="light" key={index}>
      <DayExerciseElement 
        key={index}
        exerciseRecords={day.exerciseRecords}
      />
    </Table>
  ));
  return (
    <>
      {dayElements}
    </>
  );
};