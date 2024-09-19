import { GET, POST } from "@/shared/api/";
import { HealthStreakResponseDto } from "@/shared/api";

export const toggleStreak = async (action: boolean, healthId: number) => {
  const { data, error, response } = await POST('/health/streak', {
    body: {
      healthId: healthId,
      create: action,
    }
  });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }
};

export const isStreakExist = async (healthId: number): Promise<HealthStreakResponseDto | null> => {
  const { data, error, response } = await GET('/health/streak', {
    params: {
      query: {
        healthId: healthId,
      }
    }
  });
  
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }
  return data;
};