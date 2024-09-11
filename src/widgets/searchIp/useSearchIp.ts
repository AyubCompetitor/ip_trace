import { ChangeEvent } from "react";
import useStore from "../../store/store";

const useSearchIp = () => {
    const state = useStore(state => state);
    const { setQuery, getIpInfo, query } = state;

    const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);  
    const getIpInfoHandler = () => getIpInfo(query);

    return {
        searchInputHandler,
        getIpInfoHandler,
        query,
    }
};

export default useSearchIp;