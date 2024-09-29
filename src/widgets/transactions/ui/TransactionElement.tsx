import styles from '../Transaction.module.css';

interface TransactionElementProps {
  name: string;
  date?: string; // Сделаем subtitle необязательным
  price: string;
  tag?: string;
}

export const TransactionElement = ({ name, date, price, tag }: TransactionElementProps) => (
  <div className={styles.transactionBlock}>

    <div className={styles.transactionElement}>
      <div className={styles.transactionTitle}>{name}</div>
      <div className={styles.transactionSubtitle}>{tag}</div>
    </div>

    <div className={styles.transactionElement}>
      <div className={styles.transactionPrice}>{price}</div>
      <div className={styles.transactionSubtitle}>{date}</div>
    </div>

  </div>
);