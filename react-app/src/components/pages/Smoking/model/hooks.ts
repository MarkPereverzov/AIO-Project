import { useEffect, useState, useCallback } from "react"
import { fetchPeriods, fetchStatistic } from "../api/fetchers"
import { FetchPeriods, FetchRecords } from "./types";

export const usePeriods: (period: string) => [FetchPeriods[]] = (period: string) => {
    const [state, setState] = useState([{
        id:"",
        username: "",
        habitId: 0,
        period: "",
        start: "",
        end: ""
    }]);

    const fetchData = async () => {     
        setState(await fetchPeriods(new Date(period)));
    }

    useEffect(() => {
        fetchData();
    },[period]);

    return [state];
}

export const useRecord: () => [FetchRecords] = () => {
    const [state, setState] = useState({
        id: "",
        username: "",
        habitId: 0,
        record: 0,
        lastLatest: ""
    });

    const fetchData = async () => {     
        setState(await fetchStatistic());
    }

    useEffect(() => {
        fetchData();
    },[]);

    return [state];
}