import styles from '../Block.module.css'; 
import Link from 'next/link';

interface BlockProps {
  title: string,
  subtitle: string,
  Icon: React.ComponentType,
  href: string
}

export const Block = ({ title, subtitle, Icon, href }: BlockProps) => (
  <Link className={styles.link} href={href}>
    <div className={styles.block}>
      <div className={styles.blockContent}>
        <div className={styles.blockIcon}>
          <Icon />
        </div>
        <div className={styles.blockHeader}>{title}</div>
      </div>
      <div className={styles.blockDivider}></div>
      <div className={styles.blockFooter}>{subtitle}</div>
    </div>
  </Link>
);
