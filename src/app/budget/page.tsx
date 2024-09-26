import { getCategories, getProducts, getTags } from '@/entities/budget';
import { BudgetPage } from '@/cpages/budget/ui/BudgetPage';
import { ProductGetParams } from '@/shared/models';

export default async function Page({ searchParams }: { searchParams: ProductGetParams }) {
  let tags = null;
  let categories = null;
  let products = null;
  try {
    tags = await getTags();
    categories = await getCategories();
    products = await getProducts(searchParams);
  } catch (error) {
    console.log(error);
  }  

  return(
    <BudgetPage 
      tags={tags}
      categories={categories}
      products={products}
    />
  );
}