import { useState } from "react"

export const useSubscribe = (handleClose: () => void) => {
  const [pricePerPack, setPricePerPack] = useState('');
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [additionalParameter, setAdditionalParameter] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Обработка отправки данных формы
    console.log('Цена за пачку:', pricePerPack);
    console.log('Количество сигарет в день:', cigarettesPerDay);
    handleClose();
  };

	return { pricePerPack, cigarettesPerDay, setPricePerPack,  setCigarettesPerDay, handleSubmit };

}