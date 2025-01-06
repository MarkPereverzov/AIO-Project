interface ResponseDayToTonnage
{
    date: Date;
    tonnage: number;
}

export type ResponseDayTonnage = {
    pairs: ResponseDayToTonnage[];
}
