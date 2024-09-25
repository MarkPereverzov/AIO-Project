import { POST } from '@/shared/api/';
import { SubscribeDto } from '@/shared/models';

export const subscribe = async (body: SubscribeDto) => {
  const { data, error } = await POST('/health/subscribe', {body});
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }
};