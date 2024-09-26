import { POST } from '@/shared/api/';
import { SubscribeDto } from '@/shared/models';
import { throwAnyErrors } from '@/shared/lib';

export const subscribe = async (body: SubscribeDto) => {
  return await throwAnyErrors(POST('/health/subscribe', {body}));
};