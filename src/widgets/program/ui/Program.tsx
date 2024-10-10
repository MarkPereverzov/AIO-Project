import { ProductDtoResponse } from '@/shared/models';
import styles from '../Program.module.css';
import { ProgramElement } from './ProgramElement';

export const Program = ( ) => {

  const statistic = [
    { title: 'Name', exercise: '10x20', pastExercise: '20x20'},
    { title: 'Name', exercise: '10x20', pastExercise: '20x20'},
    { title: 'Name', exercise: '10x20', pastExercise: '20x20'},
    { title: 'Name', exercise: '10x20', pastExercise: '20x20'},
    { title: 'Name', exercise: '10x20', pastExercise: '20x20'},
  ];

  return (
    <div className={styles.transactionContainer}>
      <div className={styles.transactionList}>
        {statistic.map((product, index) => (
            <ProgramElement 
              key={index} 
              exercise={product.exercise}
              pastExercise={product.pastExercise}
              title={product.title} 
            />
          ))
        }
      </div>
    </div>
  );
};