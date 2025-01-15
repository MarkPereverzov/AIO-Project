import styles from './RoundButton.module.css';
import { IconContext } from "react-icons";
import { Button } from 'react-bootstrap';

interface RoundButtonProps {
    className?: string,
    size?: 'sm' | 'md' | 'lg' | 'xl';
    content: string | JSX.Element | JSX.Element[],
    onClick?: () => void
}

export const RoundButton = ({content, onClick, className, size }: RoundButtonProps) => (
    <IconContext.Provider value={{ className: `icon-${size}` }}>
        <Button 
            className={`${styles.roundButton} ${className} cr-btn-${size}`} 
            onClick={onClick}
        >
            {content}
        </Button>
    </IconContext.Provider>
)