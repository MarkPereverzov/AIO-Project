import { ResponseAnalysisExerciseDto } from './models';

export type ResponseAnalysisDayDto = {
  planExercises: ResponseAnalysisExerciseDto[][];
  weekDay: number;
}
