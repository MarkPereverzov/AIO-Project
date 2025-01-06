import { getdayTonnage, getExercisePopularityGraphic, getRepsByGroup } from '@/shared/api/sport/sportGraphicsApi';
import { daysBetween } from '@/shared/lib';
import { ExercisePopularityChart } from '@/features/exercisePopularityChart';
import { RepsByGroupChart } from '@/features/repsByGroupChart';
import { DayTonnageChart } from '@/features/dayTonnageChart';
import { ChartContainer } from '@/shared';
import { ChartFilters } from '@/features/chartFilters/ui/ChartFilters';
import { useState, useEffect } from 'react';
import { CreateExerciseDto, ResponseDayTonnage, ResponseExercisePopularity, ResponseRepsByGroup } from '@/shared/models';
import styles from '../ChartWidget.module.css';

interface ChartWidgetProps {
  exercises?: CreateExerciseDto[] | undefined;
}

interface Filters {
    chartType?: string;
    exercise?: string;
    date?: Date | null;
}
  
interface ChartData {
    popularity?: ResponseExercisePopularity;
    reps?: ResponseRepsByGroup;
    tonnage?: ResponseDayTonnage;
}

export const ChartWidget = ({exercises}: ChartWidgetProps) => {
    const initDate = new Date();
    initDate.setDate(initDate.getDate() - 7);

    const [filters, setFilters] = useState<Filters>({ chartType: 'popularity', exercise: exercises?.at(0)?.name, date: initDate });
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        if (!filters.chartType) return;
        setIsLoading(true);
        const dayDiff = daysBetween(new Date(), filters.date!);
        
        let data = null;

        switch (filters.chartType) {
        case 'popularity':
            data = await getExercisePopularityGraphic({ period: `${dayDiff}d` });
            setChartData({ popularity: data });
            break;
        case 'reps':
            data = await getRepsByGroup({ period: `${dayDiff}d` });
            setChartData({ reps: data });
            break;
        case 'tonnage':
            data = await getdayTonnage({ period: `${dayDiff}d`, exercise: filters.exercise! });
            setChartData({ tonnage: data });
            break;
        default:
            return;
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

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
                </>
            )}
            
        </div>
    );
}