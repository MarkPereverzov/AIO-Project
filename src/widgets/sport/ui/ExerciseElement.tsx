import { RoundButton } from "@/shared";
import { WeightElement } from './WeightElement';
import { ResponsePlanExerciseDto } from "@/shared/models";
import { IoRepeat } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { DeleteButton } from "@/features/deleteItem/ui/DeleteButton";
import { deletePlanExercise } from "@/entities/sport";
import { EditButton } from "@/features/editItem/ui/EditButton";
import { updateExerciseRecord } from "@/entities/sport";
import { UpdateExerciseRecordDto } from "@/shared/models";

import styles from '../planexercise.module.css';

interface ExerciseElementProps {
  exercise: ResponsePlanExerciseDto,
  onDelete: (id: number) => Promise<void>;
};

export const ExerciseElement = ({exercise, onDelete }: ExerciseElementProps) => {
  const title = exercise?.exercise.name ?? 'Undefined';
  const muscle = "грудь";
  const id = exercise?.id ?? -1;

  const initial = {
    exercise: title,
    reps: 0,
    weight: 0
  }

  const handleSave = async (values: any) => {
    await updateExerciseRecord(id, values);
  }

  const reps = exercise?.sets?.map((set:any, index:any) => (
    <WeightElement key={index} weight={set.weight} reps={set.reps}/>
  ));

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pushinfo}>
        <h1 className={styles.exerciseTitle}>{title}</h1>
        <h1 className={styles.muscleGroup}>{muscle}</h1>
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
              size={36}
              modalSettings={{
                title: 'Редактирование записи',
                fields: [
                  { name: 'exercise', label: 'Название упражнения', type: 'text' },
                  { name: 'reps', label: 'Количество повторений', type: 'number' },
                  { name: 'weight', label: 'Вес', type: 'number' },
                ],
                initialValues: initial,
                onSave: handleSave,
                onCancel: ()=>{},
              }}
            />
              {/* <RoundButton 
                size={36}
                onClick={()=>{}}
                content={<RiPencilLine size={30}/>}
              /> */}
              <DeleteButton 
                size={36}
                onDelete={async ()=>{await onDelete(id)}}
              />
          </div>
      </div>
    </div>
  );
};