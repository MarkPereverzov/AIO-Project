import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import styles from './ChartContainer.module.css';
import { ChartContainer } from './ChartContainer';

// Регистрация компонентов
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

interface LineChartProps {
    title: string; // Название графика
    xData: string[]; // Массив значений для оси X
    yData: number[]; // Массив значений для оси Y
}
  
export const LineChart: React.FC<LineChartProps> = ({ title, xData, yData }) => {
    const defaultColor = 'rgba(54, 162, 235, 0.5)';
    const data = {
        labels: xData,
        datasets: [
          {
            label: title,
            data: yData,
            backgroundColor: defaultColor, // Используем переданные цвета или берём из defaultColors
            borderColor: defaultColor,
            borderWidth: 1,
            fill: true,
            cubicInterpolationMode: 'monotone'
          },
        ],
      };
      const maxValue = Math.max(...yData);
      const options = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: maxValue + (maxValue * 0.1), // Задаём максимальное значение с запасом 10%
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: true, // Показывать текст
            align: 'top', // Расположение текста сверху
            anchor: 'end',
            formatter: function(value: number, context: any) {
              const dataIndex = context.dataIndex;
              const dataset = context.dataset.data;
              if(dataIndex === dataset.length-1) return value.toString();
              if (dataIndex > 0 && value <= dataset[dataIndex - 1]) {
                return ''; // Пропуск подписи
              }
              return value.toString(); // Показываем значение
            },
            color: '#000', // Цвет текста
            font: {
              weight: 'bold', // Толщина шрифта
            },
            padding: {
              top: 0, // Отступ от вершины колонки
            },
          },
          title: {
            display: false,
            text: title,
          },
        },
      };

    return (
      <ChartContainer title={title} >
        <Line className={styles.Chart} data={data as any} options={options as any}/>
      </ChartContainer>
    );
};