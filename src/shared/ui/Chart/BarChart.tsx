import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartContainer } from './ChartContainer';
import styles from './ChartContainer.module.css';


// Регистрация компонентов
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels );

interface BarChartProps {
    title: string; // Название графика
    xData: string[]; // Массив значений для оси X
    yData: number[]; // Массив значений для оси Y
    colors?: string[];
}
  
export const BarChart: React.FC<BarChartProps> = ({ title, xData, yData, colors }) => {
    const defaultColors = [
        'rgba(255, 99, 132, 0.5)', 
        'rgba(54, 162, 235, 0.5)', 
        'rgba(255, 206, 86, 0.5)', 
        'rgba(75, 192, 192, 0.5)', 
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
    ];

    const data = {
        labels: xData,
        datasets: [
          {
            label: title,
            data: yData,
            backgroundColor: colors || defaultColors.slice(0, yData.length), // Используем переданные цвета или берём из defaultColors
            borderColor: colors?.map(color => color.replace('0.5', '1')) || defaultColors.map(color => color.replace('0.5', '1')), // Границы колонок
            borderWidth: 1,
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          datalabels: {
            display: true, // Показывать текст
            align: 'top', // Расположение текста сверху
            anchor: 'end',
            formatter: (value: number) => value.toString(), // Форматирование текста
            color: '#000', // Цвет текста
            font: {
              weight: 'bold', // Толщина шрифта
            },
            padding: {
              top: 0, // Отступ от вершины колонки
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true, // Ось Y начинается с нуля
            max: Math.max(...yData) + 10, // Установите максимальное значение чуть больше максимума данных
            ticks: {
              stepSize: 10, // Интервал между делениями
            },
          },
        },
      };

    return (
      <ChartContainer title={title} >
        <Bar className={styles.Chart}  data={data} options={options as any}/>
      </ChartContainer>
    );
};