import { useEffect, useState, useCallback } from "react"
import { fetchPeriods, fetchStatistic } from "../api/fetchers"
import { FetchPeriods, FetchRecords } from "./types";
import { HealthRecordDto, GET } from "../../../../shared/api"
import { useToken } from "../../../context";

export const usePeriods: (period: string) => [HealthRecordDto[]] = (period: string) => {
    const {accessToken} = useToken();
    const [state, setState] = useState([{
        id:0,
        streakBegin:"",
        streakEnd:""
    }]);

    const fetchData = async () => {     
        const { data, error } = await GET("/health/records", {
            params: {
              query: { healthId: 5 },
            },
            headers: {'Authorization': `Bearer ${accessToken}`}
          });
        if (data !== undefined) {
            console.log(data);
            setState(data);
        }        
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