import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import styles from '../Menu.module.css';

export const HabitsSection = () => (
  <div className={styles.sidebarContent}>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/smoking">Курение</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/health">Алкоголь</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/drugs">Наркотики</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/sweets">Сладкое</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/coffee">Кофе</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/porn">Порно</Link></Nav.Link>
  </div>
);