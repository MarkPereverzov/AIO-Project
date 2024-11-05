import { Color } from 'react-bootstrap/esm/types';
import styles from '../Filters.module.css';
import { Button } from 'react-bootstrap';

interface TagProps {
    id: number,
    name: string,
    color: string,
    isActive: boolean,
    addTag: (arg0:string)=>void,
}

export const Tag = ({id, name, color, isActive, addTag}: TagProps) => (
    <Button
      key={id}
      variant={'outline-secondary'}
      className={`${styles.tag} ${isActive ? styles.activeTag : ''}`}
      onClick={() => addTag(id.toString())}
      style={{backgroundColor: color}}
    >
      {name}
    </Button>
)