import { ProductDtoResponse } from "@/shared/models";
import { TransactionElement } from "./TransactionElement";
import { toLocaleDateString } from "@/shared/lib";
import styles from '../Transaction.module.css';

interface TransactionDateProps {
    products: ProductDtoResponse[] | null,
    date: string
}

export const TransactionDate = ({products, date}: TransactionDateProps) => { 
    const transactionlist = products?.map((product, index) => (
        <TransactionElement 
          key={index} 
          name={product?.name}
          date={date} 
          price={product?.price?.toString()}
          tags={product?.tags}
        />
    ));
    return (
        <div className={"d-flex flex-column gap-2"}>
            <h4 className={styles.date}>{date}</h4>
            <div className={styles.transactionListDate}>
                {transactionlist}
            </div>
        </div>
    );
}