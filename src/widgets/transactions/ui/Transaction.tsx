import { ProductDtoResponse } from '@/shared/models';
import styles from '../Transaction.module.css';
import { TransactionDate } from './TransactionDate';
import { toLocaleDateString, toClearDate } from '@/shared/lib';


interface TransactionProps {
  products: ProductDtoResponse[] | null,
  onEdit: (id: number, values: any) => Promise<void>;
  onDelete: (id: number) => Promise<void>;

}

function sortAndGroupByDate(products: ProductDtoResponse[]) {
  // Сортируем массив по дате
  const sortedProducts = products.sort(
    (a, b) => toClearDate(a.date).getTime() - toClearDate(b.date).getTime()
  );

  // Группируем по дате (игнорируем время)
  const groupedByDate = sortedProducts.reduce<Record<string, ProductDtoResponse[]>>((acc, product) => {
    const dateKey = toLocaleDateString(product.date); // Получаем только дату без времени
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(product);
    return acc;
  }, {});

  // Преобразуем объект в массив массивов
  return groupedByDate;
}

export const Transaction = ({ products, onEdit, onDelete }: TransactionProps) => {
  const groupedProducts = sortAndGroupByDate(products!);
  
  const transactionList = [];
  let i = 0;
  for (const [date, items] of Object.entries(groupedProducts)) {
    transactionList.push(<TransactionDate key={i} date={date} products={items} onEdit={onEdit} onDelete={onDelete}/>);
    i++;
  }

  return (
    <div className={styles.transactionContainer}>
      <div className={styles.transactionList}>
        {transactionList}
      </div>
    </div>
  );
};