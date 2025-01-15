import { ReactNode } from 'react';
import styles from './ChartContainer.module.css';
import { Card } from 'react-bootstrap';

interface ChartContainerProps {
    title: string;
    children: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ children, title }) => {
    return (
      <Card className={styles.Card}>
        <Card.Header className={styles.CardTitle}>{title}</Card.Header>
        <Card.Body className={styles.CardBody}>
          {children}
        </Card.Body>
      </Card>
    );
};