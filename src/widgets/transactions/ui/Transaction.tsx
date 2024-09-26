import { ProductDtoResponse } from '@/shared/models';
import styles from '../Transaction.module.css';
import { TransactionElement } from './TransactionElement';
import { toLocaleDateString } from '@/shared/lib';

interface TransactionProps {
  products: ProductDtoResponse[] | null,
}

export const Transaction = ({products}: TransactionProps) => {

  const statistic = [
    { name: 'Transaction 1', date: 'text', price: '+100$'},
    { name: 'Transaction 2', date: 'text', price: '-1000$'},
    { name: 'Transaction 3', date: 'text', price: '+10000$'},
    { name: 'Transaction 4', date: 'text', price: '-100000$'},
    { name: 'Transaction 5', date: 'text', price: '+1$'},
  ];

  return (
    <div className={styles.transactionContainer}>
      <div className={styles.transactionList}>
        {products?.map((product, index) => (
          <TransactionElement 
            key={index} 
            title={product.name} 
            subtitle={toLocaleDateString(product.date)} 
            price={product.price.toString()}
          />
        ))}
        {/*TEST*/}
        { !products &&
          statistic.map((product, index) => (
            <TransactionElement 
              key={index} 
              title={product.name} 
              subtitle={product.date} 
              price={product.price}
            />
          ))
        }
      </div>
    </div>
  );
};