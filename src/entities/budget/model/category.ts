import { GET, POST, PUT, DELETE } from "@/shared/api/";
import { CategoryDtoRequest, CategoryDtoResponse } from "@/shared/models"; // Adjust the import as necessary

// Get all categories
export const getCategories = async (): Promise<CategoryDtoResponse[]> => {
  const { data, error } = await GET('/budget/category');
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Create a new category
export const createCategory = async (body: CategoryDtoRequest): Promise<CategoryDtoResponse> => {
  const { data, error } = await POST('/budget/category', { body });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Update an existing category
export const updateCategory = async (id: number, body: CategoryDtoRequest): Promise<CategoryDtoResponse> => {
  const { data, error } = await PUT(`/budget/category`, {body: {
    id,
    ...body
  }} );
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Delete a category
export const deleteCategory = async (id: number): Promise<void> => {
  const { error } = await DELETE(`/budget/category/{id}`, {params:{path: {id: id}}});
  if (error !== undefined) {
    console.log(error);
  }
};
