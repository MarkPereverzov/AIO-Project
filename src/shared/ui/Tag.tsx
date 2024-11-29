import styles from "./Tag.module.css";

interface TagProps {
    title?: string;
    color?: string;
    onClick?: () => void;
}

export const Tag = ({title, color, onClick}: TagProps) => {

     return (
        <div className={styles.tagContainer} onClick={onClick} style={{border: `1px solid ${color}`}}>
            <h1 className={`${styles.tagTitle} ctext-button`}>{title}</h1>
        </div>
     );
}