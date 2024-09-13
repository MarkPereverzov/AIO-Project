import { FaCircle } from 'react-icons/fa';
import styles from '../Block.module.css';

interface BlockProps {
  title: string,
  subtitle: string
}

export const Block = ({ title, subtitle }: BlockProps) => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <div className={styles.blockIcon}>
        <FaCircle />
      </div>
      <div className={styles.blockHeader}>{title}</div>
    </div>
    <div className={styles.blockDivider}></div>
    <div className={styles.blockFooter}>{subtitle}</div>
  </div>
);