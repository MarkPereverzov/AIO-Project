'use client';
import { Header } from '@/widgets/header';
import { Block } from '@/widgets/block';
import styles from '../page.module.css';

export const SportPage = () => {
    const blocks = [
        { title: 'Список упражнений', subtitle: 'Список упражнений', href: '/sport/exercises' },
        { title: 'Список записанных упражнений', subtitle: 'Список записанных упражнений', href: '/sport/records' },
        { title: 'Аналитика', subtitle: 'Аналитика', href: '/sport/analysis' },
    ];
  return (
    <>
        <Header pageName="Спорт" />
        <div className='pageContainer'>
            <div className="gridContainer">
                {blocks.map((block, index) => (
                    <Block key={index} title={block.title} subtitle={block.subtitle} href={block.href} />
                ))}      
            </div>
        </div>
    </>
  );
};
