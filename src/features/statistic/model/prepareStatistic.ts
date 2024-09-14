import { fetchStatistic } from '@/shared/api/statisticApi';
import { fetchRecords } from '@/shared/api';
import { calculateStatistic } from '@/features/statistic';
import { HealthCompleteStatistic } from '@/features/statistic';

export const prepareStatistic = async (): Promise<HealthCompleteStatistic> => {
  const dayStatistics = await fetchStatistic();
  const dayStatistic = dayStatistics;
  const records = await fetchRecords(new Date());
  const lastStreak = records[records.length-1];
  const completeStatistic = calculateStatistic({dayStatistic, lastStreak});

  return completeStatistic;
}