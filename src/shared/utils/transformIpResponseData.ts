import { IpResponseDataModel, TransformdedIpResponseData } from "../models/models";

export const transformIpResponseData = (ipResponseData: IpResponseDataModel): TransformdedIpResponseData[] => {
    let firstKey = 0;
    const transformedIpResponseData: TransformdedIpResponseData[] = [];

    for (const key in ipResponseData) {
        if (!Object.prototype.hasOwnProperty.call(ipResponseData, key)) continue;
        
        firstKey += 1;
        const typedKey = key as keyof IpResponseDataModel;

        transformedIpResponseData.push({
            key: `${firstKey}`,
            label: key,
            children: `${ipResponseData[typedKey]}`,
        });
    }

    return transformedIpResponseData;
}; 