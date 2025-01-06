import { BarChart } from "@/shared";
import { ResponseExercisePopularity } from "@/shared/models";

interface ExercisePopularityChartProps {
    data: ResponseExercisePopularity;
}

export const ExercisePopularityChart = ({ data }: ExercisePopularityChartProps) => {
    const chartTitle = 'Популярность упражнения';

    const input = data?.pairs;
    const xValues = [] as string[];
    const yValues = [] as number[];
    
    input?.forEach((pair) => {
        xValues.push(pair.exercise);
        yValues.push(pair.reps);
    });


    return (
        <BarChart title={chartTitle} xData={xValues} yData={yValues} />
    );
}