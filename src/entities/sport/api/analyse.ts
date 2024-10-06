import { GET } from "@/shared/api";
import { throwAnyErrors } from "@/shared/lib";
import { ResponseAnalysisDayDto } from "@/shared/models/response-analysis-day.dto";

interface AnalyseExerciseDayOptions {
  weekDay: number
}
// Analyse exercise weight for a day
export const getAnalyseExerciseDay = async (
  options: AnalyseExerciseDayOptions
): Promise<ResponseAnalysisDayDto> => {
  const res =  await throwAnyErrors(GET('/sport/analyse', {
    params: {
      query: {
        ...options
      }
    }
  }));
  console.log(res);
  return res as any;
};