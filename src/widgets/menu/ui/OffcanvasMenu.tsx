import { Offcanvas, Nav } from 'react-bootstrap';
import { FaMoneyBillWave, FaBed, FaBriefcase, FaUtensils, FaSmoking, FaChevronRight, FaHome  } from 'react-icons/fa';
import { HabitsSection } from './HabitsSection';
import Link from 'next/link';
import styles from '../Menu.module.css';

interface OffcanvasProps {
  show: boolean, 
  onHide: () => void,
  showHabits: boolean,
  toggleHabits: () => void 
};

export const OffcanvasMenu = (
  { show, onHide, showHabits, toggleHabits }: OffcanvasProps) => (
  <Offcanvas show={show} onHide={onHide} style={{ width: '250px' }}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Меню</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Nav defaultActiveKey="/" className="flex-column">

      <Nav.Link className={styles.navLink}><Link className={styles.link} href="/"><FaHome className="me-2" />Главная</Link></Nav.Link>
        <Nav.Link className={styles.navLink} onClick={toggleHabits} style={{ cursor: 'pointer' }}>
          <FaSmoking className="me-2" />Зависимости
          <FaChevronRight  className="chevron-icon" style={{ transform: showHabits ? 'rotate(90deg)' : 'rotate(0deg)' }} />
        </Nav.Link>

        {showHabits && (<HabitsSection/>)}
        
        <Nav.Link className={styles.navLink}><Link className={styles.link} href="/budget"><FaMoneyBillWave className="me-2" />Бюджет</Link></Nav.Link>
        <Nav.Link className={styles.navLink}><Link className={styles.link} href="/sleep"><FaBed className="me-2" />Сон</Link></Nav.Link>
        <Nav.Link className={styles.navLink}><Link className={styles.link} href="/work"><FaBriefcase className="me-2" />Работа</Link></Nav.Link>
        <Nav.Link className={styles.navLink}><Link className={styles.link} href="/nutrition"><FaUtensils className="me-2" />Питание</Link></Nav.Link>
      </Nav>
    </Offcanvas.Body>
  </Offcanvas>
);