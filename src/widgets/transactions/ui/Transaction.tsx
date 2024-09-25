import styles from '../Transaction.module.css';
import { TransactionElement } from './TransactionElement';

export const Transaction = () => {

  const statistic = [
    { title: 'Transaction 1', subtitle: 'text', price: '+100$'},
    { title: 'Transaction 2', subtitle: 'text', price: '-1000$'},
    { title: 'Transaction 3', subtitle: 'text', price: '+10000$'},
    { title: 'Transaction 4', subtitle: 'text', price: '-100000$'},
    { title: 'Transaction 5', subtitle: 'text', price: '+1$'},
  ];

  return (
    <div className={styles.transactionContainer}>
      <div className={styles.transactionList}>
        {statistic.map((achievement) => (
          <TransactionElement title={achievement.title} subtitle={achievement.subtitle} price={achievement.price}/>
        ))}
      </div>
    </div>
  );
};