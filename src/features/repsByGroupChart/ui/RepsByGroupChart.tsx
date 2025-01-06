import { BarChart } from "@/shared";
import { ResponseRepsByGroup } from "@/shared/models";

interface RepsByGroupChartProps {
    data: ResponseRepsByGroup;
}

export const RepsByGroupChart = ({ data }: RepsByGroupChartProps) => {
    const chartTitle = 'Количество подходов на групу мышц';

    const input = data?.pairs;
    const xValues = [] as string[];
    const yValues = [] as number[];
    
    input?.forEach((pair) => {
        xValues.push(pair.muscleGroup);
        yValues.push(pair.reps);
    });

    return (
        <BarChart title={chartTitle} xData={xValues} yData={yValues} />
    );
}