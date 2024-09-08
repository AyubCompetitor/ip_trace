import axios from "axios";
import { IpResponseDataModel } from "../../models/models";
import { GetIpInfoPayload } from "./ip.types";
import uri from "../uri";

export const ip_api = {
    /*  
        https://demo.ip-api.com/json/24.48.0.1?fields=66846719 - 66846719 это числовой шорткат для всех полей,
        по другому можно написать каждый field через запятую - status,message,continent,continentCode,country и.т.д
    */

    async getIPInfo(payload: GetIpInfoPayload): Promise<IpResponseDataModel> {
        const { getIpInfoBaseUrl } = uri;
        const { ip, fieldsCollection} = payload;

        const response = await axios.get(`${getIpInfoBaseUrl}${ip}?fields=${fieldsCollection || '66846719'}`);
        return response.data;
    },
}