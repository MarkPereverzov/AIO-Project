import { PlanExerciseElement } from './PlanExerciseElement';
import { RoundButton } from '@/shared';

import { FaPlus } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";

import styles from '../sport.module.css';
import Form from 'react-bootstrap/Form';

interface PlanProps {
  exercise: string,
  reps: number | string,
  sets: number | string,
};

export const Plan = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Программа</h1>
      </div>
      <div className={styles.optionsBlock}>
        <Form.Select className={styles.select}>
          <option value="1">Грудь - Трицепс</option>
          <option value="2">Ноги - Плечи</option>
          <option value="3">Спина - Бицепс</option>
        </Form.Select>
        <div className={styles.rightSide}>
            <RoundButton 
              size={52}
              content={<FaPlus size={40}/>}
            />
            <RoundButton 
              size={52}
              content={<RiPencilLine size={40}/>}
            />
            <RoundButton 
              size={52}
              content={<FaRegTrashAlt size={40}/>}
            />
        </div>
      </div>
      <div className={styles.exerciseContainer}>
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
        <PlanExerciseElement
          title='Жим груди'
          muscle='грудь'
        />
      </div>
    </div>
  );
}