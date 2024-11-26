import React, { useState } from 'react';
import { RoundButton } from '@/shared';
import { FaRegTrashAlt } from "react-icons/fa";

interface DeleteButtonProps {
  onDelete: () => Promise<void>; // Функция удаления элемента
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string,
}

export const DeleteButton = ({onDelete, size, className}: DeleteButtonProps) => {
  const handleDelete = async () => {
    await onDelete(); // Вызов логики удаления
  };

  return (
      <RoundButton
        size={size}
        className={className}
        onClick={handleDelete}
        content={<FaRegTrashAlt size={size ?? 30}/>}
      />
  );
};
