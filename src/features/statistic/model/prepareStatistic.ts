import { CompleteStatDto } from "@/shared/api";

export const prepareStatistic = (statistic: CompleteStatDto) => {
  const newLastDay = new Date(statistic?.lastBadDay).toLocaleDateString();
  if (statistic) statistic.lastBadDay = newLastDay ? newLastDay : 'ERROR';
  return statistic;
}