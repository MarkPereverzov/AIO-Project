import { SmokingPage } from "@/pages/smoking/ui/SmokingPage";
import { prepareStatistic } from "@/features/statistic";

export default async function Page() {
  const completeStatistic = await prepareStatistic();
  return <SmokingPage completeStatistic={completeStatistic} />;
}