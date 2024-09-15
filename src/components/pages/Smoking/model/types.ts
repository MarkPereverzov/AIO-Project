export interface FetchPeriods {
    id: string,
    username: string,
    habitId: number,
    period: string,
    start: string,
    end: string
}

export interface FetchRecords {
    id: string,
    username: string,
    habitId: number,
    record: number,
    lastLatest: string
}