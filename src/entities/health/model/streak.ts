import { POST } from "@/shared/api/";
type StreakAction = 'begin' | 'end';

export const streakActionFactory = (action: StreakAction) => {
  return async (healthId: number): Promise<void> => {
    if (action === 'begin') {
      await beginStreak(healthId);
    } else if (action === 'end') {
      await endStreak(healthId);
    }
  };
};

const beginStreak = async (healthId: number): Promise<void> => {
  const { data, error, response } = await POST('/health/beginStreak', {
    body: {
      healthId: healthId,
    }
  });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }
}

const endStreak = async (healthId: number): Promise<void> => {
  const { data, error, response } = await POST('/health/endStreak', {
    body: {
      healthId: healthId,
    }
  });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }
}