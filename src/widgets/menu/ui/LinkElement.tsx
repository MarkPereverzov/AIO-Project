import { Nav } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { HiOutlineChevronRight } from "react-icons/hi";


import Link from 'next/link';
import styles from '../Menu.module.css';

interface LinkElementProps {
    caption: string,
    content: string | JSX.Element | JSX.Element[] | null,
    href?: string,
    isNested?: boolean,
    showHabits?:boolean,
    isActive?: boolean,
    onClick?: () => void
}

export const LinkElement = ({ caption, href, content, isNested, showHabits, isActive, onClick }: LinkElementProps) => (
    <Nav.Link className={`${styles.navLink} ${isActive ? styles.active : ''}`} onClick={onClick} style={isNested ? { cursor: 'pointer' } : {}}>
        <Link className={styles.link} href={href ?? ''}>
            <div className={`${styles.navLinkBlock} ${isActive ? styles.activeText : ''}`} >
                {content}
                <h3 className={`${styles.navText} `}>{caption}</h3>
            </div>
            {isNested && <HiOutlineChevronRight size={24}  className={`${styles.chevron} ${isActive ? styles.activeText : ''}`} style={{ transform: showHabits ? 'rotate(90deg)' : 'rotate(0deg)' }} />}
        </Link>
    </Nav.Link>
)