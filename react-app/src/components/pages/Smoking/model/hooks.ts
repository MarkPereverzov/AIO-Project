import { useEffect, useState, useCallback } from "react"
import { fetchPeriods } from "../api/fetchers"
import { FetchPeriods } from "./types";

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