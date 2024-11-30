'use client';
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const updateUrlParams = (router: AppRouterInstance, updatedParams: Record<string, string[]>, searchParams: ReadonlyURLSearchParams) => {
  // Создаем копию текущих параметров
  const newSearchParams = new URLSearchParams(searchParams.toString());

  // Обновляем параметры
  Object.entries(updatedParams).forEach(([key, values]) => {
    // Удаляем старые значения параметра
    newSearchParams.delete(key);

    // Если есть новые значения, добавляем их в URL
    values.forEach(value => {
      if (value) newSearchParams.append(key, value);
    });
  });

  // Обновляем URL
  router.push(`?${newSearchParams.toString()}`);
};

export const useUrlParams = (paramName: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParamValues = (): string[] => {
    return searchParams?.getAll(paramName) || [];
  };

  const toggleParamValue = (value: string) => {
    const currentValues = getParamValues();
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];

    updateUrlParams(router, { [paramName]: updatedValues }, searchParams!);
  };

  // Обновление значения параметра (замена существующего значения)
  const updateParamValue = (value: string) => {
    updateUrlParams(router, { [paramName]: [value] }, searchParams!);
  };

  // Удаление параметра из URL
  const removeParam = () => {
    updateUrlParams(router, { [paramName]: [] }, searchParams!);
  };

  return {
    paramValue: getParamValues(),  // Получить текущее значение параметра
    toggleParamValue, // Добавить или удалить значение для параметра (например, теги)
    updateParamValue, // Обновить значение параметра (например, категория)
    removeParam,      // Удалить параметр из URL
  };
};