'use client';
import { Filters } from '@/widgets/filters';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import React from 'react';
import { Transaction } from '@/widgets/transactions';
import { CategoryDtoResponse, ProductDtoResponse, TagDtoResponse } from '@/shared/models';
import { CreateTag } from '@/features/createTag';
import { CreateProduct } from '@/features/createProduct';
import { useState } from 'react';
import { createProduct, deleteProduct, deleteTag, updateProduct, updateTag, createTag } from '@/entities/budget';

interface BudgetPageProps {
  tags: TagDtoResponse[] | null,
  categories: CategoryDtoResponse[] | null,
  products: ProductDtoResponse[] | null,
}

export const BudgetPage = ({tags: initialTags, categories: initialCategories, products: initialProducts}: BudgetPageProps) => {
  const [categories, setCategories] = useState(initialCategories);
  const [tags, setTags] = useState(initialTags);
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleDeleteTag = async (id: number) => {
    try {
      await deleteTag(id);

      // Изменяем транзакции локально
      const updatedTags = tags?.filter((tag) => tag.id !== id);

      setTags(updatedTags!);
    } catch (error) {
        console.error('Ошибка при удалении тега:', error);
    }
  };

  const handleEditTag = async (id: number, values: any) => {
    try {
        await updateTag(id, values);

        // Изменяем транзакции локально
        const updatedTags = tags?.map((tag) => (
            tag.id === id ? {...tag, ...values} : tag
        ));

        setTags(updatedTags!);
    } catch (error) {
        console.error('Ошибка при редактировании тега:', error);
    }
  };
  
  const handleCreateTag = async (values: any) => {
    try {
      // Изменяем транзакции локально
      const updatedTags = [...tags!];
      updatedTags.push({...values});

      setTags(updatedTags!);
    } catch (error) {
        console.error('Ошибка при добавлении тега:', error);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);

      // Изменяем транзакции локально
      const updatedProducts = products?.filter((product) => product.id !== id);

      setProducts(updatedProducts!);
    } catch (error) {
        console.error('Ошибка при удалении транзакции:', error);
    }
  };

  const handleEditProduct = async (id: number, values: any) => {
    try {
        await updateProduct(id, values);

        // Изменяем транзакции локально
        const updatedProducts = products?.map((product) => (
            product.id === id ? {...product, ...values} : product
        ));

        console.log(updatedProducts);
        setProducts(updatedProducts!);
    } catch (error) {
        console.error('Ошибка при редактировании транзакции:', error);
    }
  };
  
  const handleCreateProduct = async (values: any) => {
    try {
      //await createProduct(values);
      // Изменяем транзакции локально
      const updatedProducts = [...products!];
      updatedProducts.push({
        ...values, 
        tags: values.tags.map((tag: any) => tags?.find(x => x.id === tag.id)),
        //id: products?.reduce((max, x) => (x.id > max.id ? x : max)).id! + 1
      });

      setProducts(updatedProducts!);
    } catch (error) {
        console.error('Ошибка при добавлении транзакции:', error);
    }
  };


  const categories_uf = [
    { name: 'Продукты', id: 1 },
    { name: 'Здоровье', id: 2 },
    { name: 'Спорт', id: 3 },
    { name: 'Одежда', id: 4 },
    { name: 'Кафе и рестораны', id: 5 },
    { name: 'Путешествия', id: 6 },
    { name: 'Книги', id: 7 },
    { name: 'Такси', id: 8 },
  ];

  const tag_uf = {
    name: 'tag',
    color: '#ffff00',
    id: 1,
    userId: "",
    categories: categories_uf[0]
  }

  const products_uf = [
    { id: 1, name: 'Name', tags: [tag_uf, tag_uf, tag_uf], date: '01-01-2020', price: 100},
    { id: 2, name: 'Name', tags: [tag_uf], date: '01-01-2020', price: 100},
    { id: 3, name: 'Name', tags: [tag_uf], date: '02-01-2020', price: 100},
    { id: 4, name: 'Name', tags: [tag_uf], date: '02-01-2020', price: 100},
  ];

  //console.log(tags, categories, products);

  return (
    <>
      <Header pageName="Бюджет" />
      <div className='pageContainer'>
          <Filters 
            filteredProducts={filteredProducts}
            products={products} 
            setProducts={setFilteredProducts} 
            tags={tags} 
            categories={categories} 
          />
          <Transaction products={filteredProducts ? filteredProducts : products_uf as any} 
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
          <Footer>
            <CreateTag 
              onAdd={handleCreateTag}
              categories={categories ? categories : categories_uf}
            />
            <CreateProduct 
              onAdd={handleCreateProduct}
              tags={tags}
              categories={categories}
            />
          </Footer>
      </div>
    </>
  );
};
