import { getCategories, getProducts, getTags } from '@/entities/budget';
import { BudgetPage } from '@/cpages/budget/ui/BudgetPage';
import { ProductGetParams } from '@/shared/models';

export default async function Page({ searchParams }: { searchParams: ProductGetParams }) {
  const tags = await getTags();
  const categories = await getCategories();
  const products = await getProducts(searchParams);

  return(
    <BudgetPage 
      tags={tags}
      categories={categories}
      products={products}
    />
  );
}