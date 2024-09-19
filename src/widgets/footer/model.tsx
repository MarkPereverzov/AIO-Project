import { useState } from 'react';

export const useFooter = () => {
  // Состояние для первой модалки
  const [showModal, setShowModal] = useState(false);
  // Состояние для второй модалки
  const [showPlayModal, setShowPlayModal] = useState(false);

  // Обработчики для первой модалки
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Обработчики для второй модалки
  const handleShowPlayModal = () => setShowPlayModal(true);
  const handleClosePlayModal = () => setShowPlayModal(false);

  return {
    showModal,
    handleShow,
    handleClose,
    showPlayModal,
    handleShowPlayModal,
    handleClosePlayModal,
  };
};
