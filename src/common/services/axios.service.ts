"use client";
import axios from "axios";
import { ApiEndpoint } from "@/constants/api.constant";
import { makeUseAxios } from "axios-hooks";
import { getAuthToken } from "./auth.service";

const instance = axios.create({
    baseURL: ApiEndpoint('main', 'base')
});

instance.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const useApi = makeUseAxios({
    axios: instance,
    defaultOptions: { manual: true, useCache: false, autoCancel: false }
});