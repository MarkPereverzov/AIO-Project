import { RoundButton } from "@/shared";
import { WeightElement } from './WeightElement';
import { ResponseAnalysisExerciseDto } from "@/shared/models";
import { IoRepeat } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";


import styles from '../planexercise.module.css';

interface ExerciseElementProps {
  exercise: ResponseAnalysisExerciseDto[],
};

export const ExerciseElement = ({exercise}: ExerciseElementProps) => {
  const title = exercise ? exercise.at(0)?.exercise : 'Undefined';
  const muscle = "грудь";

  const reps = exercise?.map(exercise => (
    <WeightElement weight={exercise.weight} reps={exercise.reps}/>
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
              <RoundButton 
                size={36}
                onClick={()=>{}}
                content={<RiPencilLine size={30}/>}
              />
              <RoundButton 
                size={36}
                onClick={()=>{}}
                content={<FaRegTrashAlt size={30}/>}
              />
          </div>
      </div>
    </div>
  );
};