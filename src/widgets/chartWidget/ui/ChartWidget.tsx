import { getdayMaxWeightOnReps, getdayTonnage, getExercisePopularityGraphic, getRepsByGroup } from '@/shared/api/sport/sportGraphicsApi';
import { daysBetween } from '@/shared/lib';
import { ExercisePopularityChart } from '@/features/exercisePopularityChart';
import { RepsByGroupChart } from '@/features/repsByGroupChart';
import { DayTonnageChart } from '@/features/dayTonnageChart';
import { ChartContainer } from '@/shared';
import { ChartFilters } from '@/features/chartFilters';
import { DayMaxWeightChart } from '@/features/dayMaxWeightChart';
import { useState, useEffect } from 'react';
import { CreateExerciseDto, ResponseDayTonnage, ResponseExercisePopularity, ResponseRepsByGroup } from '@/shared/models';
import styles from '../ChartWidget.module.css';
import { ResponseDayMaxWeight } from '@/shared/models/analysis/response-day-max-weight-reps.dto';

interface ChartWidgetProps {
  exercises?: CreateExerciseDto[] | undefined;
}

interface Filters {
    chartType?: string;
    exercise?: string;
    minReps?: number;
    startDate?: Date | null;
    endDate?: Date | null;
}
  
interface ChartData {
    popularity?: ResponseExercisePopularity;
    reps?: ResponseRepsByGroup;
    tonnage?: ResponseDayTonnage;
    maxWeight?: ResponseDayMaxWeight;
}

export const ChartWidget = ({exercises}: ChartWidgetProps) => {
    const initDate = new Date();
    initDate.setDate(initDate.getDate() - 7);

    const [filters, setFilters] = useState<Filters>({ chartType: 'popularity', exercise: exercises?.at(0)?.name, minReps: 8, startDate: initDate, endDate: new Date() });
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        if (!filters.chartType) return;
        setIsLoading(true);
        
        let data = null;

        switch (filters.chartType) {
        case 'popularity':
            data = await getExercisePopularityGraphic({ start: filters.startDate!, end: filters.endDate! });
            setChartData({ popularity: data });
            break;
        case 'reps':
            data = await getRepsByGroup({ start: filters.startDate!, end: filters.endDate! });
            setChartData({ reps: data });
            break;
        case 'tonnage':
            data = await getdayTonnage({  start: filters.startDate!, end: filters.endDate!, exercise: filters.exercise! });
            setChartData({ tonnage: data });
            break;
        case 'maxWeight':
            data = await getdayMaxWeightOnReps({  start: filters.startDate!, end: filters.endDate!, exercise: filters.exercise!, reps: filters.minReps! });
            setChartData({ maxWeight: data });
            break;
        default:
            return;
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    console.log(filters, chartData);

    return (
        <div className={styles.ChartContainer}>
            <ChartFilters
                filters={filters} onChange={setFilters} exercises={exercises}
            />
            {isLoading && (
                <ChartContainer title={'Loading...'} children={undefined}/>
            )}
            {!isLoading && (
                <>
                    {filters.chartType === 'popularity' && chartData?.popularity && (
                        <ExercisePopularityChart data={chartData.popularity} />
                    )}
                    {filters.chartType === 'reps' && chartData?.reps && (
                        <RepsByGroupChart data={chartData.reps} />
                    )}
                    {filters.chartType === 'tonnage' && chartData?.tonnage && (
                        <DayTonnageChart data={chartData.tonnage} />
                    )}
                    {filters.chartType === 'maxWeight' && chartData?.maxWeight && (
                        <DayMaxWeightChart data={chartData.maxWeight} />
                    )}
                </>
            )}
            
        </div>
    );
}