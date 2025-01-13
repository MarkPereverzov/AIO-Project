import { GET } from "@/shared/api";
import { RequestPeriod, ResponseExercisePopularity, ResponseRepsByGroup, RequestDayTonnage, ResponseDayTonnage } from "@/shared/models"; 
import { throwAnyErrors } from "@/shared/lib";
import { RequestDayMaxWeightOnReps } from "@/shared/models/analysis/request-day-max-weight-reps.dto";
import { ResponseDayMaxWeight } from "@/shared/models/analysis/response-day-max-weight-reps.dto";

// Get exercise popoularity pairs
export const getExercisePopularityGraphic = async (params: RequestPeriod): Promise<ResponseExercisePopularity> => {
  return await throwAnyErrors(GET('/sport-graphics/exercise-popularity', {params: {
    query: {
      start: params.start.toDateString(),
      end: params.end.toDateString(),
    }
  }})) as any;
};

// Get muscle group reps pairs
export const getRepsByGroup = async (params: RequestPeriod): Promise<ResponseRepsByGroup> => {
    return await throwAnyErrors(GET('/sport-graphics/reps-by-group', {params: {
      query: {
        start: params.start.toDateString(),
        end: params.end.toDateString(),
      }
    }})) as any;
};

// Get date to tonnage for given exercise pairs
export const getdayTonnage = async (params: RequestDayTonnage): Promise<ResponseDayTonnage> => {
    return await throwAnyErrors(GET('/sport-graphics/day-tonnage', {params: {
      query: {
        ...params,
        start: params.start.toDateString(),
        end: params.end.toDateString(),
      }
    }})) as any;
};

// Get date to max weight for given exercise pairs
export const getdayMaxWeightOnReps = async (params: RequestDayMaxWeightOnReps): Promise<ResponseDayMaxWeight> => {
  return await throwAnyErrors(GET('/sport-graphics/day-maxweight', {params: {
    query: {
      ...params,
      start: params.start.toDateString(),
      end: params.end.toDateString(),
    }
  }})) as any;
};