import { Button } from 'react-bootstrap';
import styles from '../Block.module.css'; 
import Link from 'next/link';

interface BlockProps {
  title: string,
  subtitle: string,
  href: string
}

export const Block = ({ title, subtitle, href }: BlockProps) => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <h3 className={styles.title}>{title}</h3>
      <h1 className={`${styles.subtitle} ctext-primary`}>{subtitle}</h1>
    </div>
    <Link className={styles.link} href={href}><Button className={`${styles.button} ctext-button`}>Приступить</Button></Link>
  </div>
);
