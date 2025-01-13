import { Container } from 'react-bootstrap';
import { ExerciseElement } from '@/shared';
import { CreateExerciseDto } from '@/shared/models';
import styles from './styles/ExerciseList.module.css';

interface ExerciseListProps {
    exercises: CreateExerciseDto[];
    onUpdateExercise: (id: number, values: any) => void;
    onDeleteExercise: (id: number) => void;
}

export const ExerciseList = ({exercises, onUpdateExercise, onDeleteExercise}: ExerciseListProps) => {

    return (
        <div className={styles.mainBlock}>
            <div className={styles.titleBlock}>
                <h1 className={styles.title}>Список упражнений</h1>
            </div>
            <Container className={styles.exerciseContainer} style={{ overflowY: 'auto' }}>
                {exercises?.map((e, index) => (
                    <ExerciseElement
                        key={index}
                        exercise={e as CreateExerciseDto & {id: number}}
                        onDelete={async () => await onDeleteExercise((e as CreateExerciseDto & {id: number}).id)} 
                        onEdit={async (id: number, values: any) => await onUpdateExercise((e as any).id, values)}
                    />
                ))}
            </Container>
            {/* <div className={styles.exerciseContainer}>
                {exercises}
            </div> */}
        </div>
    );

}