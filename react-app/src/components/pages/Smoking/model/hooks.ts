import { useEffect, useState, useCallback } from "react"
import { fetchPeriods } from "../api/fetchers"
import { FetchPeriods } from "./types";

export const usePeriods: (period: Date) => FetchPeriods[] = (period: Date) => {
    const [state, setState] = useState([{
        id:"",
        username: "",
        habitId: 0,
        period: "",
        start: "",
        end: ""
    }]);

    const fetchData = useCallback(async () => {     
        setState(await fetchPeriods(period));
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return state;
}