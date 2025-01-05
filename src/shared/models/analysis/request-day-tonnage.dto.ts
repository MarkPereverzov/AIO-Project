type Duration = `${number}${'m' | 'y' | 'd' | 'w'}`;

export type RequestDayTonnage = {
    period: Duration;
    exercise: string;
}