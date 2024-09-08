

import { create } from 'zustand';
import { devtools, } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { ip_api } from '../shared/api/Ip/ip.api';
import { IpInfo, NotFoundFallbackStatuses } from '../shared/models/models';
import { transformIpResponseData } from '../shared/utils/transformIpResponseData';



interface UseStore {
    ipInfo: undefined | IpInfo,
    fallBackStatus: undefined | NotFoundFallbackStatuses,
    getIpInfo: (ip: string) => void,
}

const useStore = create<UseStore>()(
    devtools(
        immer((set) => ({

            /* state */
            ipInfo: undefined,
            fallBackStatus: undefined,

            /* setters */

            getIpInfo: async (ip: string) => {
                const { getIPInfo } = ip_api;
                const responseData = await getIPInfo({ ip });

                return responseData.message
                    ? set((state) => {
                        state.ipInfo = undefined;
                        state.fallBackStatus = responseData.message;
                    })
                    : set((state) => {
                        state.fallBackStatus = undefined
                        state.ipInfo = transformIpResponseData(responseData)
                    });
            },
        }))
    )
);

export default useStore;  