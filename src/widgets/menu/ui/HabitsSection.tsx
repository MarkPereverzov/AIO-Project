import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import styles from '../Menu.module.css';

export const HabitsSection = () => (
  <div className={styles.sidebarContent}>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/health/smoking">Курение</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/health/health">Алкоголь</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/health/drugs">Наркотики</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/health/sweets">Сладкое</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/health/coffee">Кофе</Link></Nav.Link>
    <Nav.Link className={styles.navLink}><Link className={styles.link} href="/health/porn">Порно</Link></Nav.Link>
  </div>
);