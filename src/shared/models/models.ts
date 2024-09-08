export type NotFoundFallbackStatuses = 'private range' | 'reserved range' | 'invalid query';

export type IpResponseDataModel = {
    status: 'success' | 'fail',
    message?: NotFoundFallbackStatuses,
    continent?: string,
    continentCode?: string,
    country?: string,
    countryCode?: string,
    region?: string,
    regionName?: string,
    city?: string,
    district?: string,
    zip?: string,
    lat?: number,
    lon?: number,
    timezone?: string,
    offset?: number,
    currency?: string,
    isp?: string,
    org?: string,
    as?: string,
    asname?: string,
    reverse?: string,
    mobile?: boolean,
    proxy?: boolean,
    hosting?: boolean,
    query?: string,
}


export type TransformdedIpResponseData = {
    key: string,
    label: string,
    children: string | number | boolean | undefined;
}

export type IpInfo = TransformdedIpResponseData[];