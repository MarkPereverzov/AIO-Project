import { GET } from "@/shared/api";
import { ResponseAnalysisExerciseDto } from "@/shared/models"; // Adjust the import as necessary
import { throwAnyErrors } from "@/shared/lib";

interface AnalyseExerciseDayOptions {
  weekDay: number
}
// Analyse exercise weight for a day
export const analyseExerciseDay = async (
  options: AnalyseExerciseDayOptions
): Promise<ResponseAnalysisExerciseDto[]> => {
  return await throwAnyErrors(GET('/sport/analyse', {
    params: {
      query: {
        ...options
      }
    }
  }));
};