import styles from './RoundButton.module.css';
import { Button } from 'react-bootstrap';

interface RoundButtonProps {
    className?: string,
    size: number,
    content: string | JSX.Element | JSX.Element[],
    onClick: () => void
}

export const RoundButton = ({size, content, onClick, className}: RoundButtonProps) => (
    <Button 
        className={`${styles.roundButton} ${className}`} 
        onClick={onClick}
        style={
            {
                width: `${size}px !important`, 
                height: `${size}px !important`,
            }
        }
    >
        {content}
    </Button>
)