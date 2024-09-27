import { GET, POST, PUT, DELETE } from "@/shared/api/";
import { ProductDtoCreateRequest, ProductDtoResponse, ProductUpdateDtoRequest, ProductGetParams } from "@/shared/models"; // Adjust the imports according to your project
import { throwAnyErrors } from '@/shared/lib';

// Get all products with filter
export const getProducts = async (params: ProductGetParams): Promise<ProductDtoResponse[]> => {
  return await throwAnyErrors(GET('/budget/product', {params: {query: {...params}}}));
};

// Create a new product
export const createProduct = async (body: ProductDtoCreateRequest): Promise<ProductDtoResponse> => {
  return await throwAnyErrors(POST('/budget/product', { body }));
};

// Update an existing product
export const updateProduct = async (id: number, body: ProductUpdateDtoRequest): Promise<ProductDtoResponse> => {
  return await throwAnyErrors(PUT(`/budget/product`, {params:{path: {id: id}}, body}));
};

// Get a product by ID
export const getProductById = async (id: number): Promise<ProductDtoResponse> => {
  return await throwAnyErrors(GET(`/budget/product/{id}`, { params: { path: { id } } }));
};

// Delete a product
export const deleteProduct = async (id: number): Promise<void> => {
  await throwAnyErrors(DELETE(`/budget/product/{id}`, { params: { path: { id } } }));
};
