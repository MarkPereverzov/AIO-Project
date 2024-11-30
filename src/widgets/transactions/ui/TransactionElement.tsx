import { Tag } from '@/shared';
import styles from '../Transaction.module.css';
import { ProductDtoResponse, TagDtoResponse } from '@/shared/models';
import { EditButton, DeleteButton } from '@/shared';
import { toClearDate, toLocaleDateString } from '@/shared/lib';

interface TransactionElementProps {
  product: ProductDtoResponse;
  onEdit: (id: number, values: any) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export const TransactionElement = ({ product, onEdit, onDelete }: TransactionElementProps) => {
  const tagsBlock = product.tags?.map((tag, index) => <Tag key={index} color={tag?.color} title={tag?.name}></Tag>);
  const initial = product;
  return (
    <div className={styles.transactionBlock}>

      <div className={`${styles.transactionElement}`}>
       <h4 className={styles.transactionTitle}>{product.name}</h4>
        <div className={styles.tagBlock}>
          {tagsBlock}
        </div>
        {/* <div className={styles.transactionSubtitle}><h1 className='ctext-button'>{tag}</h1></div> */}
      </div>

      <div className={"d-flex flex-column gap-1"}>
        <h4 className={styles.transactionPrice}>{`-${product.price}€`}</h4>
        <div className={styles.transactionSubtitle}><h1 className='ctext-primary'>{toLocaleDateString(product.date)}</h1></div>
      </div>

      <div className={"d-flex flex-row gap-1 align-items-center"}>
        <EditButton
          size='md'
          modalSettings={{
            title: 'Редактирование записи',
            fields: [
              { name: 'name', label: 'Транзакция', type: 'text' },
              { name: 'date', label: 'Дата', type: 'date'},
              { name: 'price', label: 'Цена', type: 'number'}
            ],
            initialValues: initial,
            onSave: async (values: any) => {await onEdit(product.id, values)},
            onCancel: ()=>{},
          }}
        />
        <DeleteButton 
          size='md'
          onDelete={() => onDelete(product.id)}
        />
      </div>

    </div>
  );
}