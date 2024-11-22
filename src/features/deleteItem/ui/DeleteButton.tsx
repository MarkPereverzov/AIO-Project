import React, { useState } from 'react';
import { RoundButton } from '@/shared';
import { FaRegTrashAlt } from "react-icons/fa";

interface DeleteButtonProps {
  onDelete: () => Promise<void>; // Функция удаления элемента
  size?: number,
}

export const DeleteButton = ({onDelete, size}: DeleteButtonProps) => {
  const handleDelete = async () => {
    await onDelete(); // Вызов логики удаления
  };

  return (
      <RoundButton
        size={size ?? 36}
        onClick={handleDelete}
        content={<FaRegTrashAlt size={size ?? 30}/>}
      />
  );
};
