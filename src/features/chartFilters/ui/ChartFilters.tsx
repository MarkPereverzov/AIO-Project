import React from 'react';
import { Select } from '@/shared/ui/Select'; // Переиспользуемый селектор
import { DatePicker } from '@/shared/ui/DatePicker'; // Переиспользуемый датапикер
import { toClearDate } from '@/shared/lib';
import { CreateExerciseDto } from '@/shared/models';
import styles from '../ChartFilters.module.css';
import { Input } from '@/shared';

interface ChartFiltersProps {
    onChange: (filters: { chartType?: string; minReps?: number, exercise?: string; startDate?: Date | null; endDate?: Date | null; }) => void;
    filters: { chartType?: string; exercise?: string; minReps?: number; startDate?: Date | null; endDate?: Date | null; };
    exercises?: CreateExerciseDto[] | undefined;
  }
  
export const ChartFilters: React.FC<ChartFiltersProps> = ({ onChange, filters, exercises }) => (
    <div className={styles.ChartFiltersContainer}>
        {/* Селектор типа графика */}
        <Select
            value={filters.chartType}
            onChange={(e) => onChange({ ...filters, chartType: e.target.value })}
            options={[
                { value: 'popularity', label: 'Популярность упражнения' },
                { value: 'reps', label: 'Мышцы по подходам' },
                { value: 'tonnage', label: 'Тоннаж по дню' },
                { value: 'maxWeight', label: 'Максимальный вес по дню' },
            ]}
        />

        {/* Селектор упражнения отображается только для типа "reps" */}
        {(filters.chartType === 'tonnage' || filters.chartType === 'maxWeight') && (
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
        {filters.chartType === 'maxWeight' && (
            <Input
                value={filters.minReps}
                type='number'
                onChange={(e) => onChange({ ...filters, minReps: parseInt(e.target.value) })}
            />
        )}

        {/* Выбор даты */}
        <DatePicker
            value={filters.startDate}
            onChange={(date) => onChange({ ...filters, startDate: date })}
            placeholder="Выберите начальную дату"
        />
        <DatePicker
            value={filters.endDate}
            onChange={(date) => onChange({ ...filters, endDate: date })}
            placeholder="Выберите конечную дату"
        />
    </div>
);
