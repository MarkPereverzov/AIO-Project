import { RoundButton } from "@/shared";
import { WeightElement } from './WeightElement';
import { ResponseExerciseRecordDto, ResponsePlanExerciseDto } from "@/shared/models";
import { IoRepeat } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { DeleteButton } from "@/shared/ui/DeleteButton";
import { EditButton } from "@/shared/ui/EditButton";
import { MuscleElement } from "@/shared"; 
import styles from './ExerciseElement.module.css';

interface ExerciseElementProps {
  exerciseRecord: ResponseExerciseRecordDto,
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number, values: any) => Promise<void>;
};

export const ExerciseRecordElement = ({exerciseRecord, onDelete, onEdit }: ExerciseElementProps) => {
  const exercise = exerciseRecord?.exercise;
  const title = exercise?.name ?? 'Undefined';
  const muscles = exercise?.muscleGroups as any;
  const muscleBlock = muscles?.map((muscle: {id:number, name: string}, index: number) => <MuscleElement key={index} muscleGroup={muscle} onClick={()=>{}}/>);
  
  const id = exerciseRecord?.id ?? -1;

  const initial = {
    exercise: title,
    reps: exerciseRecord?.reps,
    weight: exerciseRecord?.weight
  }

  const reps = (
    <WeightElement weight={exerciseRecord.weight} reps={exerciseRecord.reps}/>
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pushinfo}>
        <h4 className={styles.exerciseTitle}>{title}</h4>
        <div className={styles.muscleBlock}>
          {muscleBlock}
        </div>
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