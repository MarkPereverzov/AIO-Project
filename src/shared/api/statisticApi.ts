import { GET } from '@/shared/api';
import { CompleteStatDto } from '@/shared/models';

export const fetchStatistic = async (): Promise<CompleteStatDto> => {
  const { data, error } = await GET('/health/stat', {
    params: {
      query: { healthId: 1 },
    }
  });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
}