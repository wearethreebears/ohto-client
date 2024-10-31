import axios from "axios";

// import { ohtoConfig } from "../../../ohto.config.ts";

import humps from "humps";
const { camelizeKeys } = humps;
import type {
  IRequest,
  TRequestData,
  IQueryData,
  TResponseData,
} from "./types/invoke.types";

// export const API_PATH = ohtoConfig.client.baseUrl;
export const API_PATH = "http://127.0.0.1:8000";

export enum EAPI {
  DEFAULT = "/api",
  STAFF = "/api/staff",
}

axios.defaults.withCredentials = true;

export const createQueryString = (queryData?: IQueryData | string): string => {
  if (!queryData) return "";
  let queryString = "?";

  if (typeof queryData === "string") return `${queryString}${queryData}`;

  console.log(queryData);

  Object.entries(queryData).forEach(([key, value], index) => {
    index > 0 && (queryString += "&");
    Array.isArray(value)
      ? (queryString += `${key}=${value.join(",")}`)
      : (queryString += `${key}=${value}`);
  });

  return queryString;
};

export default function invoke(
  request: IRequest,
  requestData?: TRequestData<any>,
  api: EAPI = EAPI.DEFAULT,
  config = {}
): TResponseData<any> {
  const concatenatedRequestPath = `${API_PATH}${api}${request.path}`;
  if (["get"].includes(request.method)) {
    return axios
      .get(
        `${concatenatedRequestPath}${createQueryString(requestData)}`,
        config
      )
      .then(({ data }) => camelizeKeys(data)) as TResponseData<any>;
  } else if (["post"].includes(request.method)) {
    return axios
      .post(concatenatedRequestPath, requestData, config)
      .then(({ data }) => camelizeKeys(data)) as TResponseData<any>;
  } else if (["image"].includes(request.method)) {
    return axios
      .get(
        `${concatenatedRequestPath}${createQueryString(requestData)}`,
        config
      )
      .then((data) => data);
  } else {
    return axios
      .post(concatenatedRequestPath, requestData, config)
      .then(({ data }) => camelizeKeys(data)) as TResponseData<any>;
  }
}
