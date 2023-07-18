import { ApiEndpoint } from "@/constants/api.constant";
import axios from "axios";
import { makeUseAxios } from "axios-hooks";

const instance = axios.create({
    baseURL: ApiEndpoint('main', 'base')
});

// TODO: token interceptor

export const useApi = makeUseAxios({
    axios: instance,
    defaultOptions: { manual: true, autoCancel: false }
});