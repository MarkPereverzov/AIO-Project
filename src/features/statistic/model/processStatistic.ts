import { HealthCompleteStatistic, StatisticProps } from "./types"
import { daysBetween } from "@/shared/lib";

export const calculateStatistic = ({dayStatistic, lastStreak}: StatisticProps): HealthCompleteStatistic => {
  console.log(daysBetween(new Date(lastStreak?.streakEnd), new Date(lastStreak?.streakBegin)));
  console.log(lastStreak?.streakEnd, lastStreak?.streakBegin);
  const badThingCount = dayStatistic?.totalDays * 4;
  const completeStatistic = {
    totalDays: dayStatistic?.totalDays,
    longestStreak: dayStatistic?.longestStreak,
    lastBadDay: new Date(lastStreak?.streakBegin),
    lastStreakDays: daysBetween(new Date(lastStreak?.streakEnd), new Date(lastStreak?.streakBegin)),
    //TODO
    badThingCount: badThingCount,
    moneySaved: badThingCount * 0.25,
  }
  return completeStatistic;
}