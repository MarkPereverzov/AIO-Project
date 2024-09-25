import styles from '../Transaction.module.css';

interface TransactionElementProps {
  title: string;
  subtitle?: string; // Сделаем subtitle необязательным
  price: string;
}

export const TransactionElement = ({ title, subtitle, price }: TransactionElementProps) => (
  <div className={styles.transactionBlock}>

    <div className={styles.transactionElement}>
      <div className={styles.transactionTitle}>{title}</div>
      <div className={styles.transactionSubtitle}>{subtitle}</div>
    </div>

    <div className={styles.transactionElement}>
      <div className={styles.transactionPrice}>{price}</div>
    </div>

  </div>
);
