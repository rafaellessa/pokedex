import axios, { AxiosInstance } from "axios";
export default class Api {
  private static apiInstance: AxiosInstance;
  public static getApiInstance(baseUrl: string): AxiosInstance {
    const api = axios.create({
      baseURL: baseUrl,
      timeout: 120,
      withCredentials: true,
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
    this.apiInstance = api;
    return this.apiInstance;
  }
}
