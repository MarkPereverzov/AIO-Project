import { fetchStatistic } from "@/shared/api";
import { SmokingPage } from "@/pages/smoking/ui/SmokingPage";

export default async function Page() {
  try {
    const completeStatistic = await fetchStatistic();
    return <SmokingPage completeStatistic={completeStatistic} />;
  } catch (error) {
    console.error(error);
    return <SmokingPage completeStatistic={null} />;
  }
}