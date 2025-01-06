import { LineChart } from "@/shared";
import { ResponseDayTonnage } from "@/shared/models";
import { toLocaleDateString } from "@/shared/lib";

interface DayTonnageChartProps {
    data: ResponseDayTonnage;
}

export const DayTonnageChart = ({ data }: DayTonnageChartProps) => {
    const chartTitle = 'Тоннаж по дням на упражнение';

    const input = data?.pairs;
    const xValues = [] as string[];
    const yValues = [] as number[];
    
    input?.forEach((pair) => {
        xValues.push(toLocaleDateString(pair?.date, undefined, undefined, false));
        yValues.push(pair?.tonnage);
    });

    return (
        <LineChart title={chartTitle} xData={xValues} yData={yValues} />
    );
}