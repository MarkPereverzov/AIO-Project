import { GET } from '@/shared/api/';
import { throwAnyErrors } from '@/shared/lib';

export const fetchRecords = async (date: Date) => {
  return await throwAnyErrors(GET('/health/records', {
    params: {
      query: { 
        healthId: 1, 
        month: date.getMonth() + 1,
        year: date.getFullYear()
      },
    }
  }));
}