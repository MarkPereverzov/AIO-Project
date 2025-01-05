import { GET } from "@/shared/api";
import { RequestPeriod, ResponseExercisePopularity, ResponseRepsByGroup, RequestDayTonnage, ResponseDayTonnage } from "@/shared/models"; 
import { throwAnyErrors } from "@/shared/lib";

// Get exercise popoularity pairs
export const getExercisePopularityGraphic = async (params: RequestPeriod): Promise<ResponseExercisePopularity> => {
  return await throwAnyErrors(GET('/sport-graphics/exercise-popularity', {params: {
    query: {...params}
  }}));
};

// Get muscle group reps pairs
export const getRepsByGroup = async (params: RequestPeriod): Promise<ResponseRepsByGroup> => {
    return await throwAnyErrors(GET('/sport-graphics/reps-by-group', {params: {
      query: {...params}
    }}));
};

// Get date to tonnage for given exercise pairs
export const getdayTonnage = async (params: RequestDayTonnage): Promise<ResponseDayTonnage> => {
    return await throwAnyErrors(GET('/sport-graphics/day-tonnage', {params: {
      query: {...params}
    }}));
};