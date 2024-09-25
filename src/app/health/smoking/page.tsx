import { fetchRecords, fetchStatistic } from '@/shared/api';
import { SmokingPage } from '@/cpages/smoking/ui/SmokingPage';

export default async function Page({ searchParams }: { searchParams: { date?: string } }) {
  try {
    const completeStatistic = await fetchStatistic();
    const date = searchParams.date;
    const records = await fetchRecords(date ? new Date(date) : new Date());
    return <SmokingPage completeStatistic={completeStatistic} records={records} />;
  } catch (error) {
    console.error(error);
    return <SmokingPage completeStatistic={null} records={null} />;
  }
}