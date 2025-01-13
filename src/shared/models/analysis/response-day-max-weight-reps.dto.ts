export type ResponseDayToMaxWeight = {
    date: Date;
    maxWeight: number;
}

export type ResponseDayMaxWeight = {
    pairs: ResponseDayToMaxWeight[];
}
