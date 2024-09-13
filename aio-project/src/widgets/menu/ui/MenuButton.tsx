import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import styles from '../Menu.module.css';

export const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <Button className={styles.menuButton} onClick={onClick}>
    <FaBars />
  </Button>
);
