import { GET } from "@/shared/api/";

export const fetchRecords = async (date: Date) => {
  const { data, error } = await GET('/health/records', {
    params: {
      query: { 
        healthId: 1, 
        month: date.getMonth() + 1,
        year: date.getFullYear()
      },
    }
  });

  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
}