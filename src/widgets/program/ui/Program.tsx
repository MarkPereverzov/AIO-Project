import { ProductDtoResponse } from '@/shared/models';
import styles from '../Program.module.css';
import { ProgramElement } from './ProgramElement';
import { toLocaleDateString } from '@/shared/lib';

interface ProgramProps {
  products: ProductDtoResponse[] | null,
}

export const Program = ({products}: ProgramProps) => {

  const statistic = [
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
          <ProgramElement 
            key={index} 
            name={product.name}
            date={toLocaleDateString(product.date)} 
            price={product.price.toString()}
          />
        ))}
        {/*TEST*/}
        { !products &&
          statistic.map((product, index) => (
            <ProgramElement 
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