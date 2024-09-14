import { useState } from "react";

interface useTagsProps {
  handleAddTag: (arg0: string) => void,
  handleClose: () => void,
}

export const useTags = ({handleAddTag, handleClose}: useTagsProps) => {
  const [tagName, setTagName] = useState('');

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tagName.trim()) {
      handleAddTag(tagName.trim()); // Передаем тег родительскому компоненту
      setTagName(''); // Очищаем поле ввода
      handleClose(); // Закрываем модальное окно
    }
  };

  return {tagName, handleSubmit, setTagName };
}