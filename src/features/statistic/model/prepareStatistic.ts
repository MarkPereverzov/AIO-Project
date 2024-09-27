import { CompleteStatDto } from '@/shared/models';
import { toLocaleDateString } from '@/shared/lib';

const FAILED_LASTBADDAY = 'К сожалению, я покурил сегодня';

export const prepareStatistic = (statistic: CompleteStatDto | null) => {
  if (!statistic || statistic.lastBadDay === FAILED_LASTBADDAY) return statistic;
  const newLastDay = statistic.lastBadDay ? toLocaleDateString(statistic.lastBadDay,'.') : FAILED_LASTBADDAY;
  if (statistic) statistic.lastBadDay = newLastDay;
  return statistic;
}