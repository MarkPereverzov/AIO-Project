import { PlanRow } from "@/features/sport";
import { ResponsePlanExerciseDto } from "@/shared/models";
import { Table } from "react-bootstrap";

interface PlanExerciseProps {
  planExercises: ResponsePlanExerciseDto[] | null,
};

export const PlanExercise = ({planExercises}: PlanExerciseProps) => {
  const planRows = planExercises?.map((planExercise, index) => (
    <PlanRow
      key={index} 
      exercise={planExercise.exercise}
      sets={planExercise.sets}
      reps={planExercise.reps}
    />
  ));
  return (
    <Table striped hover variant="light">
      <tbody>
        {planRows}
      </tbody>
    </Table>
  );
};