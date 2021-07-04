import { AxiosRequestConfig } from "axios";
import Api from ".";
import { IMakeRequest } from "./helpers/types.services";
const makeRequest = async ({
  method,
  url,
  headers,
  params,
  action,
}: IMakeRequest) => {
  const baseUrl = url ? "" : process.env.API_URL;
  const urlFull = `${action ?? url}${buildQueryString(params)}`;

  const requestConfig: AxiosRequestConfig = {
    url: urlFull,
    headers,
    method,
  };

  const apiInstance = Api.getApiInstance(baseUrl!);
  const response = await apiInstance.request(requestConfig);

  return response;
};

const buildQueryString = (params?: Record<string, any>): string => {
  if (params) {
    const queryString = Object.keys(params)
      .sort()
      .map((key: string) => `${key}=${params[key]}`)
      .join("&");

    return `?${queryString}`;
  }

  return "";
};

export default makeRequest;
