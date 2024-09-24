'use client';
import { Filters } from '@/widgets/filters';
import { Header } from '@/widgets/header';
import React, { useState } from 'react';

export const BudgetPage = () => {
  
  return (
    <div>
      <Header pageName="Бюджет" />
      <div className='pageContainer'>
        <div className="gridContainer">
          <Filters />
        </div>
      </div>
    </div>
  );
}
