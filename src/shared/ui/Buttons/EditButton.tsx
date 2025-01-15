import React, { useState } from 'react';
import { RoundButton } from '@/shared';
import { RiPencilLine } from "react-icons/ri";
import { EditModal } from '@/shared';
import type { FieldConfig } from '@/shared';

interface EditButtonProps<T> {
  size?:  'sm' | 'md' | 'lg' | 'xl';
  modalSettings: {
    title: string,
    fields: FieldConfig[],
    initialValues: T,
    onSave: (values: T) => Promise<void>,
    onCancel: () => void
  }
}

export const EditButton = <T extends Record<string, any>>({
    modalSettings,
    size,
  }: EditButtonProps<T>) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleSave = async (values: T) => {
      await modalSettings.onSave(values); // Сохраняем изменения
      setShowModal(false); // Закрываем модальное окно
    };
  
    const handleCancel = () => {
      modalSettings.onCancel(); // Вызываем логику отмены
      setShowModal(false); // Закрываем модальное окно
    };
  
    return (
      <>
        <RoundButton
          size={size}
          onClick={() => setShowModal(true)} // Открываем модальное окно
          content={<RiPencilLine size={30} />}
        />
        <EditModal
          show={showModal}
          title={modalSettings.title}
          fields={modalSettings.fields}
          initialValues={modalSettings.initialValues}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </>
    );
  };