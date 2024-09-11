import useStore from "../../store/store";

const useSearchIp = () => {
    const state = useStore(state => state);
    const { getIpInfo } = state;

    const getIpInfoHandler = (query: string) => getIpInfo(query);
    
    return {
        getIpInfoHandler,
    }
};

export default useSearchIp;