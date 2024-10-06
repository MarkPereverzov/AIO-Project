import { Table } from "react-bootstrap";

interface ExerciseBlockProps {
  exercises: any[] | null | undefined;
}

export const ExerciseBlock = ({ exercises }: ExerciseBlockProps) => {
  return (
    <Table striped hover variant="light">
      <tbody>{exercises?.map((exercise, index) => <tr key={index}>{exercise}</tr>)}</tbody>
    </Table>
  );
};
