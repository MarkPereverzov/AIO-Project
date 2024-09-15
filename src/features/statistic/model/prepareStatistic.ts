import { CompleteStatDto } from "@/shared/api";

export const prepareStatistic = (statistic: CompleteStatDto) => {
  statistic.lastBadDay = new Date(statistic.lastBadDay).toLocaleDateString();
  return statistic;
}