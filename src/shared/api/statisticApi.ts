import { GET } from "@/shared/api/";

export const fetchStatistic = async () => {
  const { data, error, response } = await GET('/health/stat', {
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