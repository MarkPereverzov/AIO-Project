import { Offcanvas, Nav } from 'react-bootstrap';
import { FaBed, FaSmoking, FaChevronRight, FaHome, FaDumbbell } from 'react-icons/fa';
import { FaBurger } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { HabitsSection } from './HabitsSection';
import { LinkElement } from './LinkElement';
import { LiaHomeSolid, LiaSmokingSolid, LiaWalletSolid, LiaHamburgerSolid, LiaBriefcaseSolid, LiaDumbbellSolid, LiaBedSolid } from "react-icons/lia";
import styles from '../Menu.module.css';

interface OffcanvasProps {
  show: boolean,
  onHide: () => void,
  showHabits: boolean,
  toggleHabits: () => void 
};

export const OffcanvasMenu = (
  { show, onHide, showHabits, toggleHabits }: OffcanvasProps) => (
  <Offcanvas show={show} onHide={onHide} >
    <Offcanvas.Header closeButton className={styles.menuHeader}>
        <Offcanvas.Title>Меню</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className={styles.menuBody}>
      <Nav defaultActiveKey="/" className="flex-column">
        <LinkElement
          isActive={true}
          caption='Главная'
          content={<LiaHomeSolid size={26} className={`me-2 ${styles.icon}`} />}
          href='/'
        />
        <LinkElement
          caption='Зависимости'
          content={<LiaSmokingSolid size={26} className={`me-2 ${styles.icon}`} />}
          isNested={true}
          showHabits={showHabits}
          onClick={toggleHabits}
        />

        {showHabits && (<HabitsSection/>)}

        <LinkElement
          caption="Бюджет"
          content={<LiaWalletSolid size={26} className={`me-2 ${styles.icon}`} />}
          href="/budget"
        />
        <LinkElement
          caption="Сон"
          content={<LiaBedSolid size={26} className={`me-2 ${styles.icon}`} />}
          href="/dream"
        />
        <LinkElement
          caption="Работа"
          content={<LiaBriefcaseSolid size={26} className={`me-2 ${styles.icon}`} />}
          href="/job"
        />
        <LinkElement
          caption="Питание"
          content={<LiaHamburgerSolid size={26} className={`me-2 ${styles.icon}`} />}
          href="/nutrion"
        />
        <LinkElement
          caption="Спорт"
          content={<LiaDumbbellSolid size={26} className={`me-2 ${styles.icon}`} />}
          href="/sport"
        />
      </Nav>
    </Offcanvas.Body>
  </Offcanvas>
);