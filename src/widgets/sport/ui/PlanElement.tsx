import { RoundButton } from "@/shared";
import { WeightElement } from '../../../shared/ui/WeightElement';
import { ResponsePlanExerciseDto } from "@/shared/models";
import { IoRepeat } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { DeleteButton } from "@/shared";
import { deletePlanExercise, updatePlanExercise } from "@/entities/sport";
import { EditButton } from "@/shared/ui/EditButton";
import { updateExerciseRecord } from "@/entities/sport";
import { UpdateExerciseRecordDto } from "@/shared/models";

import styles from '../planexercise.module.css';

interface PlanElementProps {
  exercise: ResponsePlanExerciseDto,
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, values: any) => Promise<void>;
};

export const PlanElement = ({exercise, onDelete, onEdit}: PlanElementProps) => {
  const title = exercise?.exercise?.name ?? 'Undefined';
  const muscle = "грудь";
  const id = exercise?.id ?? -1;

  const initial = {
    exercise: title,
    sets: exercise?.sets
  }

  const handleSave = async (values: any) => {
    console.log(values);
    await updatePlanExercise(id, values);
  }

  const reps = exercise?.sets?.map((set:any, index:any) => (
    <WeightElement key={index} weight={set.weight} reps={set.reps}/>
  ));

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
                  { name: 'sets', label: '', type: 'array'}
                ],
                initialValues: initial,
                onSave: async (values: any) => {await onEdit(id, values)},
                onCancel: ()=>{},
              }}
            />
              <DeleteButton
                size='md'
                className={styles.deleteBtn} 
                onDelete={async ()=>{await onDelete(id)}}
              />
          </div>
      </div>
    </div>
  );
};