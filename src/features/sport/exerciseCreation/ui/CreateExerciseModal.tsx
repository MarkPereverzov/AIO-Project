import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { BiSolidBomb } from "react-icons/bi";
import { useModalButton } from '@/shared/hooks';
import { useCreateExercise } from '../model/createExercise';
import styles from '../CreateExerciseModal.module.css';
import { PopupHint } from '@/shared';
import { CreateExerciseDto } from '@/shared/models';
import { usePopupHints } from '@/shared/hooks';
import { Input } from '@/shared';

interface CreateExerciseRecordProps {
  exercises?: CreateExerciseDto[] | undefined;
  onSave: (values: CreateExerciseDto) => Promise<any>,
}

export const CreateExerciseRecord = ({exercises, onSave}: CreateExerciseRecordProps) => {
  const { show, handleClose, handleOpen } = useModalButton();
  const { show: popupState, setShow: setPopup} = usePopupHints();
  
  const { states, setStates, handleSubmit: onSavePassed } = useCreateExercise({
    initStates: {name: exercises?.at(0)?.name ?? '', muscleGroup: exercises?.at(0)?.muscleGroups ?? []},
    onSave: onSave,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();

    const {error} = await onSavePassed(e!);

    if (error != undefined) setPopup(2);
    else setPopup(1)
  }

  const successMessage = "Succesfully saved";
  const errorMessage = "Error occured";

  return (
    <>
    <button className='footerButton' onClick={handleOpen}>
      <BiSolidBomb />
    </button>
    { show && 
      <Modal
        show={show}
        onHide={handleClose}
        centered // Этот проп делает модальное окно центрированным
      >
        { popupState == 1 &&
          <PopupHint message={successMessage} variant='success' closeAfter={2000} setState={setPopup}/>
        }
        { popupState == 2 &&
          <PopupHint message={errorMessage} variant='danger' closeAfter={2000} setState={setPopup}/>
        }
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Действие</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{}} className='bodyModal'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="pricePerPack">
              <Form.Label>Название упражнения</Form.Label>
              <Input
                value={states.name}
                onChange={(e:any) => setStates({ ...states, name: e.target.value })}
              />
              <Form.Label>Группа мышц</Form.Label>
              {/* //TODO */}
            </Form.Group>

            <Button variant="primary" type="submit" className={`w-100 mt-3 ${styles.submitButton}`}>
              Сохранить запись
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    }
    </>
  );
};
