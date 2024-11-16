import { LinkElement } from './LinkElement';
import { LiaSmokingBanSolid } from "react-icons/lia";
import { PiBeerBottle, PiCoffee  } from "react-icons/pi";
import { TbCandy } from "react-icons/tb";
import { BiInjection } from "react-icons/bi";
import { TbRating18Plus } from "react-icons/tb";


  
import styles from '../Menu.module.css';

export const HabitsSection = () => (
  <div className={styles.sidebarContent}>
    <LinkElement
      caption="Курение"
      content={<LiaSmokingBanSolid size={26} className={`me-2 ${styles.icon}`} />}  // Нет иконки, но если нужно, можно добавить сюда <GiSmoking /> или другую иконку
      href="/health/smoking"
    />
    <LinkElement
      caption="Алкоголь"
      content={<PiBeerBottle size={26} className={`me-2 ${styles.icon}`} />}  // Нет иконки
      href="/health/health"
    />
    <LinkElement
      caption="Наркотики"
      content={<BiInjection size={26} className={`me-2 ${styles.icon}`} />}  // Нет иконки
      href="/health/drugs"
    />
    <LinkElement
      caption="Сладкое"
      content={<TbCandy size={26} className={`me-2 ${styles.icon}`} />}  // Нет иконки
      href="/health/sweets"
    />
    <LinkElement
      caption="Кофе"
      content={<PiCoffee size={26} className={`me-2 ${styles.icon}`} />}  // Нет иконки
      href="/health/coffee"
    />
    <LinkElement
      caption="Секрет"
      content={<TbRating18Plus size={26} className={`me-2 ${styles.icon}`} />}  // Нет иконки
      href="/health/porn"
    />
  </div>
);