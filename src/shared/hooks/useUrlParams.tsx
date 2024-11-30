'use client';
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ProductDtoResponse } from '../models';
import { useState } from 'react';

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

export class FilterConstructor {
  public products;
  public filteredProducts;
  public setProducts;
  public tagParams;
  public categoryParams;
  public nameParams;

  constructor (products: ProductDtoResponse[], filteredProducts: ProductDtoResponse[], setProducts: (products: ProductDtoResponse[]) => void) {
    this.products = products;
    this.filteredProducts = filteredProducts;
    this.setProducts = setProducts;

    this.tagParams = this.useUrlParams('tags');
    this.categoryParams = this.useUrlParams('category');
    this.nameParams = this.useUrlParams('name');
  }

  private useUrlParams = (paramName: string) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Локальное состояние для параметров
    const [params, setParams] = useState<Record<string, string[]>>(() => {
      // Инициализация состояния из текущих параметров URL
      const initialParams: Record<string, string[]> = {};
      searchParams?.forEach((value, key) => {
        initialParams[key] = searchParams.getAll(key);
      });
      return initialParams;
    });
  
    // Функция для обновления параметров URL и локального состояния
    const updateParamsState = (updatedParams: Record<string, string[]>) => {
      const newParams = { ...params };
  
      Object.entries(updatedParams).forEach(([key, values]) => {
        if (values.length === 0) {
          delete newParams[key]; // Удаляем параметр, если массив пустой
        } else {
          newParams[key] = values; // Обновляем параметр
        }
      });
  
      // Обновляем локальное состояние
      setParams(newParams);
  
      // Формируем новый URL
      const newSearchParams = new URLSearchParams();
      Object.entries(newParams).forEach(([key, values]) => {
        (values as any).forEach((value: any) => newSearchParams.append(key, value));
      });
  
      // Обновляем URL в браузере
      router.push(`?${newSearchParams.toString()}`);
    };
  
    // Получение значений параметра
    const getParamValues = (): string[] => {
      return params[paramName] || [];
    };
  
    // Переключение значения параметра
    const toggleParamValue = (value: string) => {
      const currentValues = getParamValues();
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
  
      updateParamsState({ [paramName]: updatedValues });
    };
  
    // Замена текущего значения параметра
    const updateParamValue = (value: string) => {
      updateParamsState({ [paramName]: [value] });
    };
  
    // Удаление параметра
    const removeParam = () => {
      updateParamsState({ [paramName]: [] });
    };
  
    return {
      paramValue: getParamValues,  // Получить текущее значение параметра
      toggleParamValue,             // Добавить или удалить значение для параметра
      updateParamValue,             // Обновить значение параметра
      removeParam,                  // Удалить параметр из URL
    };
  };

  private updateProducts = () => {
    const category = this.categoryParams.paramValue()?.at(0);
    const tagSet = new Set(this.tagParams.paramValue());
    const partialName = this.nameParams.paramValue()?.at(0);
  
    const filtered = this.products.filter(
      (x) =>
        (tagSet.size > 0 ?
          x.tags.some(
            (tag) =>
              tagSet.has(tag.id.toString()) &&
              (category ? tag.category.id.toString() === category : true)
          ) : true
        ) &&
          (partialName ? x.name.includes(partialName) : true)
    );
  
    this.setProducts(filtered); // Обновляем отфильтрованные продукты
  };

  public useTags = () => {
    const activeTags = this.tagParams.paramValue;
  
    const addTag = (value: string) => {
      this.tagParams.toggleParamValue(value);
      this.updateProducts(); // Обновляем продукты
    };
  
    const clearAll = () => {
      this.tagParams.removeParam();
      this.updateProducts(); // Обновляем продукты
    };
  
    return { activeTags, addTag, clearAll };
  };
  
  public useCategory = () => {
    const activeCategory = this.categoryParams.paramValue;
  
    const setActiveCategory = (value: string) => {
      this.categoryParams.updateParamValue(value);
      this.updateProducts(); // Обновляем продукты
    };
  
    return { activeCategory, setActiveCategory };
  };
  
  public useName = () => {
    const inputValue = this.nameParams.paramValue;
  
    const setName = (value: string) => {
      this.nameParams.updateParamValue(value);
      this.updateProducts(); // Обновляем продукты
    };
  
    return { inputValue, setName };
  };
}

