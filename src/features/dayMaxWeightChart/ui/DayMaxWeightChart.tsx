import { LineChart } from "@/shared";
import { ResponseDayMaxWeight } from "@/shared/models";
import { toLocaleDateString } from "@/shared/lib";

interface DayMaxWeightChartProps {
    data: ResponseDayMaxWeight;
}

export const DayMaxWeightChart = ({ data }: DayMaxWeightChartProps) => {
    const chartTitle = 'Максимальный вес по дням на упражнение';

    const input = data?.pairs;
    const xValues = [] as string[];
    const yValues = [] as number[];
    
    input?.forEach((pair) => {
        xValues.push(toLocaleDateString(pair?.date, undefined, undefined, false));
        yValues.push(pair?.maxWeight);
    });

    return (
        <LineChart title={chartTitle} xData={xValues} yData={yValues} />
    );
}