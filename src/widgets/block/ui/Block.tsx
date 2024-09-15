import styles from '../Block.module.css';

interface BlockProps {
  title: string,
  subtitle: string,
  Icon: React.ComponentType // Новый пропс для иконки
}

export const Block = ({ title, subtitle, Icon }: BlockProps) => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <div className={styles.blockIcon}>
        <Icon /> {/* Используем переданную иконку */}
      </div>
      <div className={styles.blockHeader}>{title}</div>
    </div>
    <div className={styles.blockDivider}></div>
    <div className={styles.blockFooter}>{subtitle}</div>
  </div>
);
