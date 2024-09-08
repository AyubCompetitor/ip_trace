import useStore from "../../store/store";

const useDescriptionsWithMap = () => {
    const state = useStore(state => state);
    const { ipInfo, fallBackStatus } = state;


    return {
        ipInfo,
        fallBackStatus: fallBackStatus?.toUpperCase(),
    }
}

export default useDescriptionsWithMap;