interface ExerciseRowProps {
  exercise: string,
  weight: number | string,
  reps: number | string
};

export const ExerciseRow = ({exercise, weight, reps }: ExerciseRowProps) => {
  return (
    <>
      <td>{exercise}</td>
      <td>{weight}</td>
      <td>{reps}</td>
    </>
  );
}