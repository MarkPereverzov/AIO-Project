import { CompleteStatDto } from '@/shared/models';
import { toLocaleDateString } from '@/shared/lib';

export const prepareStatistic = (statistic: CompleteStatDto | null) => {
  if (!statistic) return null;
  const newLastDay = toLocaleDateString(new Date(statistic?.lastBadDay),'.');
  if (statistic) statistic.lastBadDay = newLastDay ? newLastDay : 'ERROR';
  return statistic;
}