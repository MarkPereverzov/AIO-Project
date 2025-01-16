import { MuscleElement, RoundButton } from "@/shared";
import { CreateExerciseDto, ResponseExerciseRecordDto, ResponsePlanExerciseDto } from "@/shared/models";
import { DeleteButton } from "@/shared/ui/Buttons/DeleteButton";
import { EditButton } from "@/shared/ui/Buttons/EditButton";

import styles from './ExerciseElement.module.css';

interface ExerciseElementProps {
  exercise: CreateExerciseDto & {id: number};
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, values: any) => Promise<void>;
};

export const ExerciseElement = ({exercise, onDelete, onEdit}: ExerciseElementProps) => {
  if( !exercise ) return <></>
  const title = exercise?.name ?? 'Undefined';
  const muscles = exercise?.muscleGroups ?? [];
  const muscleBlock = muscles?.map((muscle, index) => <MuscleElement key={index} muscleGroup={muscle} onClick={()=>{}}/>);
  const id = exercise.id;

  const initial = {
    name: title,
    muscleGroups: muscles,
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
            {/* <EditButton
                size='md'
                modalSettings={{
                title: 'Редактирование упражнения',
                fields: [
                    { name: 'name', label: 'Название упражнения', type: 'text' },
                    { name: 'muscleGroups', label: 'Количество повторений', type: 'muscleGroupArray' },
                ],
                initialValues: initial,
                onSave: async (values: any) => onEdit(id, values),
                onCancel: ()=>{},
                }}
            /> */}
            <DeleteButton
                size='md'
                onDelete={async ()=>{await onDelete(id)}}
            />
            </div>
    </div>
    </div>
  );
};