import { Nav } from 'react-bootstrap';
import styles from '../Menu.module.css';

export const HabitsSection = () => (
  <div className={styles.sidebarContent}>
    <Nav.Link className={styles.navLink} href="#/smoking">Курение</Nav.Link>
    <Nav.Link className={styles.navLink} href="#/alcohol">Алкоголь</Nav.Link>
    <Nav.Link className={styles.navLink} href="#/drugs">Наркотики</Nav.Link>
    <Nav.Link className={styles.navLink} href="#/sweets">Сладкое</Nav.Link>
    <Nav.Link className={styles.navLink} href="#/coffee">Кофе</Nav.Link>
    <Nav.Link className={styles.navLink} href="#/porn">Порно</Nav.Link>
  </div>
);