import React from 'react';
import { Button } from 'react-bootstrap';
import { RoundButton } from '@/shared';
import { HiMiniBars3 } from "react-icons/hi2";
import styles from '../Menu.module.css';

export const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <RoundButton
    onClick={onClick}
    content={<HiMiniBars3 size={30}/>}
    size='lg'

  />
);
{/* <Button className={styles.menuButton} onClick={onClick}>
    <HiMiniBars3 />
  </Button> */}