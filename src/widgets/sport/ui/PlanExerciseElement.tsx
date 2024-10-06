import { PlanRow } from "..";
import { ExerciseBlock } from "./ExerciseBlock";
import { ResponsePlanExerciseDto } from "@/shared/models";

interface PlanExerciseElementProps {
  planExercises: ResponsePlanExerciseDto[] | null,
};

export const PlanExerciseElement = ({planExercises}: PlanExerciseElementProps) => {
  return (
    <ExerciseBlock
      exercises={planExercises?.map((planExercise, index) => (
        <PlanRow
          key={index}
          exercise={planExercise.exercise}
          sets={planExercise.sets}
          reps={planExercise.reps}
        />
      ))}
    />
  );
};