interface ExerciseRowProps {
  exercise: string,
  weight: number | string,
  reps: number | string
};

export const ExerciseRow = ({exercise, weight, reps }: ExerciseRowProps) => {
  return (
    <tr>
      <td>{exercise}</td>
      <td>{weight}</td>
      <td>{reps}</td>
    </tr>
  );
}