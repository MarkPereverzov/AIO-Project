import { GET } from '@/shared/api';
import { CompleteStatDto } from '@/shared/models';
import { throwAnyErrors } from '@/shared/lib';

export const fetchStatistic = async (): Promise<CompleteStatDto> => {
  return await throwAnyErrors(GET('/health/stat', {params: {query: { healthId: 1 },}}));
}