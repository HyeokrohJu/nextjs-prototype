import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import configs from '@configs/configs';

/**
 * Axios Instance
 */
const instance: AxiosInstance = axios.create({
  baseURL: configs.API_BASEURL,
});

/**
 * Axios Request Interceptor
 */
instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    console.log(config);
    return config;
  },
  (error: any): Promise<never> => {
    console.log(error);
    return Promise.reject(error);
  },
);

/**
 * Axios Response Interceptor
 */
instance.interceptors.response.use(
  (response: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
    console.log(response);
    return response;
  },
  (error: any): Promise<never> => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
