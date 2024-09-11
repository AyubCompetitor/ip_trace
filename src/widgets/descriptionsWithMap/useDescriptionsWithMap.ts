import { useEffect } from "react";
import useStore from "../../store/store";

const useDescriptionsWithMap = () => {
    const state = useStore(state => state);
    const { ipInfo, fallBackStatus, query, lonLat, getIpInfo } = state;

    useEffect(() => {
        getIpInfo(query);
    }, []);

    return {
        ipInfo,
        lonLat,
        fallBackStatus: fallBackStatus?.toUpperCase(),
    }
}

export default useDescriptionsWithMap;