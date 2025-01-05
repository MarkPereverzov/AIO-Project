import React from 'react';
import { Select } from '@/shared/ui/Select'; // Переиспользуемый селектор
import { DatePicker } from '@/shared/ui/DatePicker'; // Переиспользуемый датапикер
import { toClearDate } from '@/shared/lib';
import { CreateExerciseDto } from '@/shared/models';

interface ChartFiltersProps {
    onChange: (filters: { chartType?: string; exercise?: string; date?: Date | null }) => void;
    filters: { chartType?: string; exercise?: string; date?: Date | null };
    exercises?: CreateExerciseDto[] | undefined;
  }
  
export const ChartFilters: React.FC<ChartFiltersProps> = ({ onChange, filters, exercises }) => (
    <div>
        {/* Селектор типа графика */}
        <Select
            value={filters.chartType}
            onChange={(e) => onChange({ ...filters, chartType: e.target.value })}
            options={[
                { value: 'popularity', label: 'Популярность упражнения' },
                { value: 'reps', label: 'Мышцы по подходам' },
                { value: 'tonnage', label: 'Тоннаж по дню' },
            ]}
        />

        {/* Селектор упражнения отображается только для типа "reps" */}
        {filters.chartType === 'tonnage' && (
            <Select
                value={filters.exercise}
                onChange={(e) => onChange({ ...filters, exercise: e.target.value })}
                options={
                    exercises?.map((exercise) => (
                        {value: exercise.name, label: exercise.name}
                    ))
                }
            />
        )}

        {/* Выбор даты */}
        <DatePicker
            value={filters.date}
            onChange={(date) => onChange({ ...filters, date })}
            placeholder="Выберите дату"
        />
    </div>
);
