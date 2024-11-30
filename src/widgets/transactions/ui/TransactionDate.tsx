import { ProductDtoResponse } from "@/shared/models";
import { TransactionElement } from "./TransactionElement";
import { toLocaleDateString } from "@/shared/lib";
import styles from '../Transaction.module.css';

interface TransactionDateProps {
    products: ProductDtoResponse[] | null;
    date: string;
    onEdit: (id: number, values: any) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
}

export const TransactionDate = ({products, date, onEdit, onDelete}: TransactionDateProps) => { 
    const transactionlist = products?.map((product, index) => (
        <TransactionElement 
          key={index} 
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
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