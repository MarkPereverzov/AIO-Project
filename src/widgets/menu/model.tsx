'use client';
import { useState } from 'react';

export const useMenu = () => {
  const [show, setShow] = useState(false);
  const [showHabits, setShowHabits] = useState(false); // состояние для показа элементов вредных привычек

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleHabits = () => setShowHabits(!showHabits); // функция для переключения показа вредных привычек

  return {show, showHabits, handleShow, handleClose, toggleHabits};
}