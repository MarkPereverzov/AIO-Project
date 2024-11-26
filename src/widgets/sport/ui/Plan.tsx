import { PlanElement } from './PlanElement';
import { RoundButton } from '@/shared';
import { FaPlus } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { ResponsePlanExerciseDayDto } from '@/shared/models';
import { deletePlanExercise, updatePlanExercise } from "@/entities/sport";
import { useQuery } from '@tanstack/react-query';
import styles from '../sport.module.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

interface PlanProps {
  planDays: ResponsePlanExerciseDayDto[],
};

export const Plan = ({planDays: initialPlanDays }: PlanProps) => {
  const [planDays, setPlanDays] = useState(initialPlanDays);
  const [activeDay, setActiveDay] = useState(0); 

  const currentDay = planDays?.at(activeDay);

  const handleDeletePlanRecord = async (id: number) => {
    try {
      await deletePlanExercise(id);
      // Удаляем упражнение локально
      const updatedDays = planDays.map((day) => ({
        ...day,
        planExercises: day.planExercises.filter((exercise) => exercise.id !== id),
      }));
      setPlanDays(updatedDays);
    } catch (error) {
      console.error('Ошибка при удалении плана:', error);
    }
  };

  const handleEditExercise = async (id: number, values: any) => {
    try {
        await updatePlanExercise(id, values);

        // Изменяем упражнение локально
        const updatedDays = planDays.map((day) => ({
            ...day,
            planExercises: day.planExercises.map((exercise) =>
                exercise.id === id
                    ? { ...exercise, ...values } // Обновляем только нужное упражнение
                    : exercise // Оставляем остальные упражнения без изменений
            ),
        }));

        setPlanDays(updatedDays);
    } catch (error) {
        console.error('Ошибка при редактировании упражнения:', error);
    }
};

  const options = planDays?.map((day, index) => <option key={index} value={index}>{day.weekDay}</option>)

  const exercises = currentDay?.planExercises?.map((exercise, index) => (
    <PlanElement key={index} exercise={exercise as any} onDelete={handleDeletePlanRecord} onEdit={handleEditExercise}/>
  ));
  return (
    <div className={styles.mainBlock}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Программа</h1>
      </div>
      <div className={styles.optionsBlock}>
        <Form.Select 
          bsPrefix={'ch4'}
          value={activeDay} 
          className={`${styles.select}`}
          onChange={(event) => setActiveDay(Number(event.target.value))}
        >
          {options}
        </Form.Select>
        <div className={styles.rightSide}>
            <RoundButton 
              size='lg'
              content={<FaPlus/>}
            />
            <RoundButton 
              size='lg'
              content={<RiPencilLine/>}
            />
        </div>
      </div>
      <div className={styles.exerciseContainer}>
        {exercises}
      </div>
    </div>
  );
}