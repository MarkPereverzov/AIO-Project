import { FetchResponse } from "openapi-fetch";

export async function throwAnyErrors<T, O, Media extends `${string}/${string}`>(
  responsePromise: Promise<FetchResponse<T, O, Media>>,
) {
  const { data, error } = await responsePromise;

  if (error !== undefined) {
    throw error;
  }

  return data as NonNullable<typeof data>;
}