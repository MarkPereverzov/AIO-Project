import { RoundButton } from "@/shared";
import { WeightElement } from './WeightElement';
import { IoRepeat } from "react-icons/io5";
import { RiWeightLine } from "react-icons/ri";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";

import styles from '../planexercise.module.css';

interface HistoryExerciseElementProps {
  title: string,
  muscle: string
};

export const HistoryExerciseElement = ({title, muscle}: HistoryExerciseElementProps) => {
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
              <WeightElement/>
            </div>
          </div>
          <div className={styles.edit}>
              <RoundButton 
                size={48}
                onClick={()=>{}}
                content={<RiPencilLine size={42}/>}
              />
              <RoundButton 
                size={48}
                onClick={()=>{}}
                content={<FaRegTrashAlt size={42}/>}
              />
          </div>
      </div>
    </div>
  );
};