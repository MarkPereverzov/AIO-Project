/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/oauth/authorize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Authorize for access_code */
        get: operations["AuthorizationController_authorize"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Exchange access_code on tokens (access, refresh, openid) */
        post: operations["AuthorizationController_token"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get user DTO */
        get: operations["UserController_userInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/records": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all streaks of certain user certain health */
        get: operations["HealthController_getRecords"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/stat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all user stat */
        get: operations["HealthController_getStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/subscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Subscribe user to a certain health */
        post: operations["HealthController_registrateUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/streak": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Is there any continous streak? */
        get: operations["HealthController_isStreakExist"];
        put?: never;
        /** Create or end streak */
        post: operations["HealthController_toggleHealthStreak"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/init": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new record in health table */
        post: operations["HealthController_initHealth"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        HealthRecordDto: {
            /** @description Id of healthrercord */
            id: number;
            /**
             * Format: date-time
             * @description Day of begging of streak
             */
            streakBegin: string;
            /**
             * Format: date-time
             * @description Day of streak ending
             */
            streakEnd: string;
        };
        CompleteStatDto: {
            /** @description Total days of not doing something bad for health */
            totalDays: number;
            /** @description Longest streak */
            longestStreak: number;
            /**
             * Format: date-time
             * @description Last day with bad habit
             */
            lastBadDay: string;
            /** @description Days from begining of all streaks */
            lastStreakDays: number;
            /** @description Bad thing count */
            badThingCount: number;
            /** @description Money saved */
            moneySaved: number;
        };
        SubscribeDto: {
            /** @description Count of bad dozes per day */
            countPerDay: number;
            /** @description Price per thing in USD */
            pricePerThing: number;
            /** @description Id of health */
            healthId: number;
        };
        HealthStreakDto: {
            /** @description HealthId for manipulation with streaks */
            healthId: number;
            /** @description Create or Stop Streak ? */
            create: boolean;
        };
        HealthStreakResponseDto: {
            /** @description Is there any existing streak for given healthId ? */
            isExist: boolean;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AuthorizationController_authorize: {
        parameters: {
            query: {
                response_type: string;
                client_id: string;
                redirect_uri: string;
                scope: string;
                state: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description access_code */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AuthorizationController_token: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description access, refresh, openid tokens */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UserController_userInfo: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description UserResponseDto */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthController_getRecords: {
        parameters: {
            query: {
                healthId: number;
                month: number;
                year: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of health records */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HealthRecordDto"][];
                };
            };
        };
    };
    HealthController_getStats: {
        parameters: {
            query: {
                healthId: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of health stats */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CompleteStatDto"];
                };
            };
        };
    };
    HealthController_registrateUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Data for subscribe */
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubscribeDto"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthController_isStreakExist: {
        parameters: {
            query: {
                healthId: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Boolean meaning streak exist or doesnt */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HealthStreakResponseDto"];
                };
            };
        };
    };
    HealthController_toggleHealthStreak: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Health to create or end streak */
        requestBody: {
            content: {
                "application/json": components["schemas"]["HealthStreakDto"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HealthController_initHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
