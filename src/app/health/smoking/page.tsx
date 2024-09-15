import { fetchStatistic } from "@/shared/api";
import { SmokingPage } from "@/pages/smoking/ui/SmokingPage";

export default async function Page() {
  const completeStatistic = await fetchStatistic();
  return <SmokingPage completeStatistic={completeStatistic} />;
}