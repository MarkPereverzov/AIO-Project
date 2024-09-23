'use client';
import { useState } from 'react';
import { subscribe } from '@/entities/health';

export const useSubscribe = (handleClose: () => void) => {
  const [pricePerPack, setPricePerPack] = useState('');
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [additionalParameter, setAdditionalParameter] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Обработка отправки данных формы

    await subscribe({
      countPerDay: parseInt(cigarettesPerDay),
      pricePerThing: parseFloat(pricePerPack),
      healthId: 1
    });

    console.log('Цена за пачку:', pricePerPack);
    console.log('Количество сигарет в день:', cigarettesPerDay);
    handleClose();
  };

	return { pricePerPack, cigarettesPerDay, setPricePerPack,  setCigarettesPerDay, handleSubmit };

}