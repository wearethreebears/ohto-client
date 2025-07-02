import * as humps from "humps";
import axios, { type AxiosResponse } from "axios";
import { useNuxtApp } from "#app";

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

const getResponse = (response: AxiosResponse<any, any>): TResponseData<any> => {
  const camelized = humps.camelizeKeys(response.data);

  if (response.status === 422 || camelized.errors) {
    // Simulate an error so it goes to `catch(...)`
    const error = new Error("Validation failed");
    (error as any).response = {
      data: ((response as any).response as AxiosResponse<any, any>).data,
    };
    throw error;
  }

  return camelized as TResponseData<any>;
};

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
      .then((response) => getResponse(response))
      .catch((error) => {
        throw error;
      }) as TResponseData<any>;
  } else if (["post"].includes(request.method)) {
    console.log("POST");
    return axios
      .post(concatenatedRequestPath, requestData, config)
      .then((response) => getResponse(response));
  } else if (["image"].includes(request.method)) {
    return axios
      .get(
        `${concatenatedRequestPath}${createQueryString(requestData)}`,
        config
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  } else {
    return axios
      .post(concatenatedRequestPath, requestData, config)
      .then((response) => getResponse(response))
      .catch((error) => {
        throw error;
      }) as TResponseData<any>;
  }
}
