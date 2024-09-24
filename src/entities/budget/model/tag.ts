import { GET, POST, PUT, DELETE } from "@/shared/api/";
import { TagDtoRequest, TagDtoResponse, TagDtoUpdateRequest } from "@/shared/models"; // Adjust the import as necessary

// Get all tags
export const getTags = async (): Promise<TagDtoResponse[]> => {
  const { data, error } = await GET('/budget/tag');
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Create a new tag
export const createTag = async (body: TagDtoRequest): Promise<TagDtoResponse> => {
  const { data, error } = await POST('/budget/tag', { body });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Update an existing tag
export const updateTag = async (id: number, body: TagDtoUpdateRequest): Promise<TagDtoResponse> => {
  const { data, error } = await PUT(`/budget/tag`,{ body });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Get a tag by ID
export const getTagById = async (id: number): Promise<TagDtoResponse> => {
  const { data, error } = await GET(`/budget/tag/{id}`, {params: {path: {id: id}}});
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Delete a tag
export const deleteTag = async (id: number): Promise<void> => {
  const { error } = await DELETE(`/budget/tag/{id}`, { params: { path: { id } } });
  
  if (error !== undefined) {
    console.log(error);
  }
};
