import { GET, POST } from '@/shared/api/';
import { HealthStreakResponseDto } from '@/shared/models';
import { throwAnyErrors } from '@/shared/lib';

export const toggleStreak = async (action: boolean, healthId: number) => {
  return await throwAnyErrors(POST('/health/streak', {
    body: {
      healthId: healthId,
      create: action,
    }
  }));
};

export const isStreakExist = async (healthId: number): Promise<HealthStreakResponseDto | null> => {
  return await throwAnyErrors(GET('/health/streak', {
    params: {
      query: {
        healthId: healthId,
      }
    }
  }));
};