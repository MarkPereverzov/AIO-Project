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
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: title,
          },
        },
      };

    return (
      <ChartContainer title={title} >
        <Line className={styles.Chart} data={data} options={options as any}/>
      </ChartContainer>
    );
};