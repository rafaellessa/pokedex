import { Method } from "axios";

type ParamsType = Record<string, any>;

export interface IMakeRequest {
  action?: string;
  url?: string;
  method?: Method;
  params?: ParamsType;
  headers?: any;
  isIgnoreCache?: boolean;
}
