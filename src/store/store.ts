import { create } from 'zustand';
import { devtools, } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { ip_api } from '../shared/api/Ip/ip.api';
import { IpInfo, NotFoundFallbackStatuses } from '../shared/models/models';
import { transformIpResponseData } from '../shared/utils/transformIpResponseData';

interface UseStore {
    ipInfo: undefined | IpInfo,
    query: string,
    lonLat: number[];
    fallBackStatus: undefined | NotFoundFallbackStatuses,
    setQuery: (query: string) => void,
    getIpInfo: (ip?: string) => void,
}

const useStore = create<UseStore>()(
    devtools(
        immer((set) => ({

            /** state */
            ipInfo: undefined,
            query: '',
            lonLat: [0, 0],
            fallBackStatus: undefined,

            /** setters */
            setQuery(query) {
                set((state) => {
                    state.query = query;
                });
            },

            getIpInfo: async (ip = '') => {
                const { getIPInfo } = ip_api;
                const responseData = await getIPInfo({ ip });

                return responseData.message
                    ? set((state) => {
                        state.ipInfo = undefined;
                        state.fallBackStatus = responseData.message;
                    })
                    : set((state) => {
                        state.fallBackStatus = undefined
                        state.query = responseData.query || ip;
                        state.lonLat = responseData.lon && responseData.lat ? [responseData.lon, responseData.lat] : state.lonLat;
                        state.ipInfo = transformIpResponseData(responseData)
                    });
            },
        }))
    )
);

export default useStore;  