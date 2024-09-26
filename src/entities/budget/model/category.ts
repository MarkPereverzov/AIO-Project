import { GET, POST, PUT, DELETE } from "@/shared/api/";
import { CategoryDtoRequest, CategoryDtoResponse } from "@/shared/models"; // Adjust the import as necessary
import { throwAnyErrors } from "@/shared/lib";

// Get all categories
export const getCategories = async (): Promise<CategoryDtoResponse[]> => {
  return await throwAnyErrors(GET('/budget/category'));
};

// Create a new category
export const createCategory = async (body: CategoryDtoRequest): Promise<CategoryDtoResponse> => {
  return await throwAnyErrors(POST('/budget/category', { body }));
};

// Update an existing category
export const updateCategory = async (id: number, body: CategoryDtoRequest): Promise<CategoryDtoResponse> => {
  return await throwAnyErrors(PUT(`/budget/category`, {body: {id, ...body}}));
};

// Delete a category
export const deleteCategory = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/budget/category/{id}`, {params:{path: {id: id}}}));
};
