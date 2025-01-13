import { MuscleElement, RoundButton } from "@/shared";
import { WeightElement } from './WeightElement';
import { CreateExerciseDto, ResponseExerciseRecordDto, ResponsePlanExerciseDto } from "@/shared/models";
import { IoRepeat } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { DeleteButton } from "@/shared/ui/DeleteButton";
import { EditButton } from "@/shared/ui/EditButton";

import styles from './ExerciseElement.module.css';

interface ExerciseElementProps {
  exercise: CreateExerciseDto & {id: number};
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, values: any) => Promise<void>;
};

export const ExerciseElement = ({exercise, onDelete, onEdit}: ExerciseElementProps) => {
  const title = exercise?.name ?? 'Undefined';
  const muscles = exercise.muscleGroups;
  const muscleBlock = muscles?.map((muscle, index) => <MuscleElement key={index} muscleGroup={muscle} onClick={()=>{}}/>);
  const id = exercise.id;

  const initial = {
    exercise: title,
    reps: 0,
    weight: 0
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pushinfo}>
        <h4 className={styles.exerciseTitle}>{title}</h4>
        <div className={styles.muscleBlock}>
            {muscleBlock}
        </div>
        {/* <h1 className={`${styles.muscleGroup} ctext-secondary`}>{muscle}</h1> */}
      </div>
      <div className={styles.rightSide}>
        <div className={styles.edit}>
            <EditButton
                size='md'
                modalSettings={{
                title: 'Редактирование упражнения',
                fields: [
                    { name: 'exercise', label: 'Название упражнения', type: 'text' },
                    { name: 'reps', label: 'Количество повторений', type: 'number' },
                    { name: 'weight', label: 'Вес', type: 'number' },
                ],
                initialValues: initial,
                onSave: async (values: any) => onEdit(id, values),
                onCancel: ()=>{},
                }}
            />
            <DeleteButton
                size='md'
                onDelete={async ()=>{await onDelete(id)}}
            />
            </div>
    </div>
    </div>
  );
};