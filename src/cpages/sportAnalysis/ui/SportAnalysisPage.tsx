'use client';
import { Header } from '@/widgets/header';
import { ChartFilters } from '@/features/chartFilters/ui/ChartFilters';
import { useState, useEffect } from 'react';
import { CreateExerciseDto } from '@/shared/models';
import styles from '../page.module.css';
import { getdayTonnage, getExercisePopularityGraphic, getRepsByGroup } from '@/shared/api/sport/sportGraphicsApi';
import { daysBetween } from '@/shared/lib';

interface SportAnalysisPageProps {
  exercises?: CreateExerciseDto[] | undefined;
}

interface Filters {
  chartType?: string;
  exercise?: string;
  date?: Date | null;
}

export const SportanalysisPage = ({exercises}: SportAnalysisPageProps) => {
  const [filters, setFilters] = useState<Filters>({ chartType: 'popularity', exercise: '', date: new Date() });
  const [chartData, setChartData] = useState<string[]>(); // Состояние для данных графика

  const fetchData = async () => {
    if (!filters.chartType) return;
    const dayDiff = daysBetween(new Date(), filters.date!);

    let data = null;

    switch(filters.chartType) {
      case 'popularity': data = await getExercisePopularityGraphic({period: `${dayDiff}d`}); break;
      case 'reps': data = await getRepsByGroup({period: `${dayDiff}d`}); break;
      case 'tonnage': data = await getdayTonnage({period: `${dayDiff}d`, exercise: filters.exercise!}); break;
    }
    setChartData(data?.pairs!);
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <>
      <Header pageName="Спорт Аналитика" />
      <div className={styles.pageContainer} style={{justifyContent: 'center', gap: '50px'}}>
        <ChartFilters
          filters={filters} onChange={setFilters} exercises={exercises}
        />
        
      </div>
      {/* <Footer>
        <Exercise/>
      </Footer> */}
    </>
  );
};
