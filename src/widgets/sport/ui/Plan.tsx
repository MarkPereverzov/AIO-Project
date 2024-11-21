import { ExerciseElement } from './ExerciseElement';
import { RoundButton } from '@/shared';
import { FaPlus } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { ResponseAnalysisDayDto } from '@/shared/models';

import styles from '../sport.module.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

interface PlanProps {
  planDays: ResponseAnalysisDayDto[],
};

const ee = [
  {exercise: "Жим груди", weight: 40, reps: 12},
  {exercise: "Жим груди", weight: 50, reps: 12},
  {exercise: "Жим груди", weight: 55, reps: 12},
  {exercise: "Жим груди", weight: 55, reps: 12},
  {exercise: "Жим груди", weight: 60, reps: 12},
]

export const Plan = ({planDays}: PlanProps) => {
  const [activeDay, setActiveDay] = useState(0); 
  const currentDay = planDays?.at(activeDay);

  const options = planDays?.map((day, index) => <option key={index} value={index}>{day.weekDay}</option>)

  const exercises = currentDay?.planExercises?.map((exercise, index) => (
    <ExerciseElement key={index} exercise={exercise} />
  ));
  return (
    <div className={styles.mainBlock}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Программа</h1>
      </div>
      <div className={styles.optionsBlock}>
        <Form.Select 
          value={activeDay} 
          className={styles.select}
          onChange={(event) => setActiveDay(Number(event.target.value))}
        >
          {options}
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
        {exercises}
      </div>
    </div>
  );
}