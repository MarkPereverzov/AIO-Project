interface PlanRowProps {
  exercise: string,
  reps: number | string,
  sets: number | string,
};

export const PlanRow = ({exercise, reps, sets }: PlanRowProps) => {
  return (
    <tr>
      <td>{exercise}</td>
      <td>{reps}</td>
      <td>{sets}</td>
    </tr>
  );
}