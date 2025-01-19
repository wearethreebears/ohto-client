import humps from "humps";
import axios from "axios";
import { useNuxtApp } from "#app";

const { camelizeKeys } = humps;
import type {
  IRequest,
  TRequestData,
  IQueryData,
  TResponseData,
} from "./types/invoke.types";

export enum EAPI {
  DEFAULT = "/api",
  STAFF = "/api/staff",
  USER = "/api/user",
  SANCTUM = "",
}

axios.defaults.withCredentials = true;

export const createQueryString = (queryData?: IQueryData | string): string => {
  if (!queryData) return "";
  let queryString = "?";

  if (typeof queryData === "string") return `${queryString}${queryData}`;

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
  const { $ohtoConfig } = useNuxtApp();
  const concatenatedRequestPath = `${$ohtoConfig.client.baseUrl}${api}${request.path}`;
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
