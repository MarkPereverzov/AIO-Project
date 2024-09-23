import { POST, SubscribeDto } from "@/shared/api/";

export const subscribe = async (body: SubscribeDto) => {
  const { data, error, response } = await POST('/health/subscribe', {body});
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }
};