

export async function fetchPeriods(period: Date) {
    const retArray = [];
    switch(period.getMonth())
    {
        case 6:
            retArray.push({
                id: "1",
                username: "wxczxo",
                habitId: 1,
                period: "2024-07-01",
                start: "2024-07-10",
                end: "2024-07-21"
            })
            break;
        case 7: 
            retArray.push({
                id: "1",
                username: "wxczxo",
                habitId: 1,
                period: "2024-08-01",
                start: "2024-08-05",
                end: "2024-08-15"
            });
            retArray.push({
                id: "1",
                username: "wxczxo",
                habitId: 1,
                period: "2024-08-01",
                start: "2024-08-17",
                end: "2024-08-22"
            });
            break;
        default: break;
    }
    return (retArray);
}

export async function fetchStatistic() {
    return ({
        id: "1",
        username: "wxczxo",
        habitId: 1,
        record: 11
    });
}