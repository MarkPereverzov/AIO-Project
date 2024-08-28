

export async function fetchPeriods(period: Date) {
    const retArray = [];
    switch(period.getMonth())
    {
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
        case 8:
            retArray.push({
                id: "1",
                username: "wxczxo",
                habitId: 1,
                period: "2024-09-01",
                start: "2024-09-10",
                end: "2024-09-21"
            })
            break;
        default: break;
    }
    return (retArray);
}