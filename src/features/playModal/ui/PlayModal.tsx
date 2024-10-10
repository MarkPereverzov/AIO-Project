import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { isStreakExist, toggleStreak } from '@/entities/health/api/streak';
import { BiSolidRightArrow } from "react-icons/bi";
import { useModalButton } from '@/shared/hooks';
import { HealthStreakResponseDto } from '@/shared/models';
import '../PlayModal.module.css';

export const PlayModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUsedToBadThing, setIsUsedToBadThing] = useState<HealthStreakResponseDto | null>(null);

  const updateStatusPlayModal = async () => {
    setIsLoading(true);
    try {
      const status = await isStreakExist(1);
      console.error(status);
      setIsUsedToBadThing(status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleStreak = async () => {
    await toggleStreak(!isUsedToBadThing?.isExist, 1);
    await updateStatusPlayModal();
  };

  const { show, handleClose, handleOpen } = useModalButton();
  const isStarted = isUsedToBadThing?.isExist;
  const buttonText = isStarted ? 'Сбросить счетчик' : 'Бросить курить';

  return (
    <>
      <button className='footerButton' onClick={handleOpen}>
        <BiSolidRightArrow/>
      </button>
      { show &&
        <Modal
          show={show}
          onHide={handleClose}
          centered // Этот проп делает модальное окно центрированным
        >
          <Modal.Header closeButton>
            <Modal.Title>Действие</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              
            }} className='bodyModal'>
            <Button variant="primary" onClick={handleStreak} className='buttonModal' disabled={isLoading}>
              {isLoading ? 'Loading...' : buttonText}
            </Button>
          </Modal.Body>
        </Modal>
      }
    </>
  );
};
