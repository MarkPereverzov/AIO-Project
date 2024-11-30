import { GET, POST, PUT, DELETE } from "@/shared/api/";
import { TagDtoRequest, TagDtoResponse, TagDtoUpdateRequest } from "@/shared/models"; // Adjust the import as necessary
import { throwAnyErrors } from '@/shared/lib';

// Get all tags
export const getTags = async (): Promise<TagDtoResponse[]> => {
  return await throwAnyErrors(GET('/budget/tag'));
};

// Create a new tag
export const createTag = async (body: TagDtoRequest): Promise<TagDtoResponse> => {
  const {data} = await POST('/budget/tag', { body });
  return data!;
};

// Update an existing tag
export const updateTag = async (id: number, body: TagDtoUpdateRequest): Promise<TagDtoResponse> => {
  return await throwAnyErrors(PUT(`/budget/tag`,{ body }));
};

// Get a tag by ID
export const getTagById = async (id: number): Promise<TagDtoResponse> => {
  return await throwAnyErrors(GET(`/budget/tag/{id}`, {params: {path: {id: id}}}));
};

// Delete a tag
export const deleteTag = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/budget/tag/{id}`, { params: { path: { id } } }));
};
