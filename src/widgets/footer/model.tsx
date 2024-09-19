import { useState } from 'react';
import { isStreakExist, toggleStreak } from '@/entities/health/model/streak';
import { HealthStreakResponseDto } from '@/shared/api';

export const useFooter = () => {
  // Состояние для первой модалки
  const [showModal, setShowModal] = useState(false);
  // Состояние для второй модалки
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [statusPlayModal, setStatusPlayModal] = useState<HealthStreakResponseDto | null>(null);
  const [isLoadingPlayModal, setIsLoadingPlayModal] = useState(false);


  // Обработчики для первой модалки
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Обработчики для второй модалки
  const updateStatusPlayModal = async () => {
    setIsLoadingPlayModal(true);
    try {
      const status = await isStreakExist(1);
      console.log(status);
      setStatusPlayModal(status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingPlayModal(false);
    }
  }

  const handleShowPlayModal = async () => {
    await updateStatusPlayModal();
    setShowPlayModal(true);
  }

  const handleStreak = async () => {
    await toggleStreak(!statusPlayModal?.isExist, 1);
    await updateStatusPlayModal();
  };

  const handleClosePlayModal = () => setShowPlayModal(false);

  return {
    showModal,
    handleShow,
    handleClose,
    showPlayModal,
    statusPlayModal,
    isLoadingPlayModal,
    handleShowPlayModal,
    handleClosePlayModal,
    handleStreak,
  };
};
