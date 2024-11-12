import { ProductDtoResponse } from '@/shared/models';
import styles from '../Transaction.module.css';
import { TransactionElement } from './TransactionElement';
import { toLocaleDateString } from '@/shared/lib';

interface TransactionProps {
  products: ProductDtoResponse[] | null,
}

export const Transaction = ({products}: TransactionProps) => {

  const statistic = [
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
    { name: 'Name', tag: 'tag', date: '00.00.0000', price: '+100$'},
  ];

  return (
    <div className={styles.transactionContainer}>
      <div className={styles.transactionList}>
        {products?.map((product, index) => (
          <TransactionElement 
            key={index} 
            name={product.name}
            date={toLocaleDateString(product.date)} 
            price={product.price.toString()}
          />
        ))}
        {/*TEST*/}
        { !products &&
          statistic.map((product, index) => (
            <TransactionElement 
              key={index} 
              tag={product.tag}
              name={product.name} 
              date={product.date} 
              price={product.price}
            />
          ))
        }
      </div>
    </div>
  );
};