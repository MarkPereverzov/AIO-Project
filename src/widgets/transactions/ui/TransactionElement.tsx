import { Tag } from '@/shared';
import styles from '../Transaction.module.css';
import { TagDtoResponse } from '@/shared/models';

interface TransactionElementProps {
  name: string;
  date?: string;
  price: string;
  tags?: TagDtoResponse[]; 
}

export const TransactionElement = ({ name, date, price, tags }: TransactionElementProps) => {
  const tagsBlock = tags?.map((tag) => <Tag color={tag.color} title={tag.name}></Tag>);
  console.log(date);
  return (
    <div className={styles.transactionBlock}>

      <div className={`${styles.transactionElement}`}>
       <h4 className={styles.transactionTitle}>{name}</h4>
        <div className={styles.tagBlock}>
          {tagsBlock}
        </div>
        {/* <div className={styles.transactionSubtitle}><h1 className='ctext-button'>{tag}</h1></div> */}
      </div>

      <div className={"d-flex flex-column gap-1"}>
        <h4 className={styles.transactionPrice}>{`-${price}€`}</h4>
        <div className={styles.transactionSubtitle}><h1 className='ctext-primary'>{date}</h1></div>
      </div>

    </div>
  );
}