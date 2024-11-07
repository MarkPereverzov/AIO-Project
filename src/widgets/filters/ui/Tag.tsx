import { Color } from 'react-bootstrap/esm/types';
import styles from '../Filters.module.css';
import { Button } from 'react-bootstrap';

interface TagProps {
    id: number,
    name: string,
    color: string,
    isActive: boolean,
    disabled?: boolean,
    addTag?: (arg0:string)=>void,
}

export const Tag = ({id, name, color, isActive, disabled, addTag}: TagProps) => {
  return (
    <Button 
      disabled={disabled ?? false}
      key={id}
      variant={'outline-secondary'}
      className={`${styles.tag} ${isActive ? styles.activeTag : ''}`}
      onClick={() => addTag!(id.toString())}
      style={isActive ? {borderColor: color} : {}}
    >
      {name}
    </Button>
)}