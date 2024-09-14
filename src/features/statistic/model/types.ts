import { HealthRecordDto, HealthStatDto } from "@/shared/api"

export interface StatisticProps {
  dayStatistic: HealthStatDto,
  lastStreak: HealthRecordDto, 
}

export interface HealthCompleteStatistic {
  lastBadDay: Date,
  lastStreakDays: number,
  totalDays: number,
  longestStreak: number,
  badThingCount: number,
  moneySaved: number,
}