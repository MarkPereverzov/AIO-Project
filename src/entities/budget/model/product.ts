import { GET, POST, PUT, DELETE } from "@/shared/api/";
import { ProductDtoCreateRequest, ProductDtoResponse, ProductUpdateDtoRequest, ProductGetParams } from "@/shared/models"; // Adjust the imports according to your project

// Get all products with filter
export const getProducts = async (params: ProductGetParams): Promise<ProductDtoResponse[]> => {
  const { data, error } = await GET('/budget/product', {
    params: {
      query: {
        ...params
      }
    }
  });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Create a new product
export const createProduct = async (body: ProductDtoCreateRequest): Promise<ProductDtoResponse> => {
  const { data, error } = await POST('/budget/product', { body });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Update an existing product
export const updateProduct = async (id: number, body: ProductUpdateDtoRequest): Promise<ProductDtoResponse> => {
  const { data, error } = await PUT(`/budget/product`, { 
    params:{path: {id: id}},
    body
  });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Get a product by ID
export const getProductById = async (id: number): Promise<ProductDtoResponse> => {
  const { data, error } = await GET(`/budget/product/{id}`, { params: { path: { id } } });
  console.log(data);

  if (error !== undefined) {
    console.log(error);
  }

  return data;
};

// Delete a product
export const deleteProduct = async (id: number): Promise<void> => {
  const { error } = await DELETE(`/budget/product/{id}`, { params: { path: { id } } });
  
  if (error !== undefined) {
    console.log(error);
  }
};
