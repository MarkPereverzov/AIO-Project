import React from 'react';
import { MenuButton } from './MenuButton';
import { OffcanvasMenu } from './OffcanvasMenu';
import { useMenu } from '../model';
import '../Menu.module.css'

export const Menu = () => {
  const { show, showHabits, handleShow, handleClose, toggleHabits } = useMenu();

  return (
    <>
      <MenuButton onClick={handleShow} />
      <OffcanvasMenu show={show} onHide={handleClose} showHabits={showHabits} toggleHabits={toggleHabits} />
    </>
  );
}