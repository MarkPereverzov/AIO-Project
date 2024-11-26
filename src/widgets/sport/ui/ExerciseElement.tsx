import { RoundButton } from "@/shared";
import { WeightElement } from './WeightElement';
import { ResponseExerciseRecordDto, ResponsePlanExerciseDto } from "@/shared/models";
import { IoRepeat } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { DeleteButton } from "@/features/deleteItem/ui/DeleteButton";
import { EditButton } from "@/features/editItem/ui/EditButton";

import styles from '../planexercise.module.css';

interface ExerciseElementProps {
  exercise: ResponseExerciseRecordDto,
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, values: any) => Promise<void>;
};

export const ExerciseElement = ({exercise, onDelete, onEdit }: ExerciseElementProps) => {
  const title = exercise?.exercise ?? 'Undefined';
  const muscle = "грудь";
  const id = exercise?.id ?? -1;

  const initial = {
    exercise: title,
    reps: exercise?.reps,
    weight: exercise?.weight
  }

  const reps = (
    <WeightElement weight={exercise.weight} reps={exercise.reps}/>
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pushinfo}>
        <h4 className={styles.exerciseTitle}>{title}</h4>
        <h1 className={`${styles.muscleGroup} ctext-secondary`}>{muscle}</h1>
      </div>
      <div className={styles.rightSide}>
          <div className={styles.repsPlusIcon}>
            <div className={styles.icons}>
              <RiWeightLine size={30}/>
              <IoRepeat size={30}/>
            </div>
            <div className={styles.reps}>
              {reps}
            </div>
          </div>
          <div className={styles.edit}>
            <EditButton
              size='md'
              modalSettings={{
                title: 'Редактирование записи',
                fields: [
                  { name: 'exercise', label: 'Название упражнения', type: 'text' },
                  { name: 'reps', label: 'Количество повторений', type: 'number' },
                  { name: 'weight', label: 'Вес', type: 'number' },
                ],
                initialValues: initial,
                onSave: (values: any) => onEdit(id, values),
                onCancel: ()=>{},
              }}
            />
              {/* <RoundButton 
                size={36}
                onClick={()=>{}}
                content={<RiPencilLine size={30}/>}
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