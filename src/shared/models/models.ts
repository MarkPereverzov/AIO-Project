import type { components } from "@/shared/api/v1";

//User Dto's
export type UserResponseDto = components["schemas"]["UserResponseDto"];

//Health Dto's
export type HealthRecordDto = components["schemas"]["HealthRecordDto"];
export type CompleteStatDto = components["schemas"]["CompleteStatDto"];
export type HealthStreakDto = components["schemas"]["HealthStreakDto"];
export type HealthStreakResponseDto = components["schemas"]["HealthStreakResponseDto"];
export type SubscribeDto = components["schemas"]["SubscribeDto"];

//Budget Dto
export type CategoryDtoResponse = components["schemas"]["CategoryDtoResponse"];
export type CategoryDtoRequest = components["schemas"]["CategoryDtoRequest"];
export type TagDtoResponse = components["schemas"]["TagDtoResponse"];
export type TagDtoRequest = components["schemas"]["TagDtoRequest"];
export type TagDtoUpdateRequest = components["schemas"]["TagDtoUpdateRequest"];
export type ProductDtoCreateRequest = components["schemas"]["ProductDtoCreateRequest"];
export type ProductDtoResponse = components["schemas"]["ProductDtoResponse"];
export type ProductUpdateDtoRequest = components["schemas"]["ProductUpdateDtoRequest"];
export type { ProductGetParams } from './product';