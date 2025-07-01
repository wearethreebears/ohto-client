import type { TResponseData } from "./invoke.types";

export interface IResponseErrors {
  [key: string]: string[];
}
export interface IResource {
  id: number;
}

export type TErrorResponseData = Promise<{
  data: {
    message: string;
    errors: IResponseErrors;
  };
}>;

export const isErrorResponse = (
  response: TResponseData<any> | TErrorResponseData
): response is TErrorResponseData => {
  return (
    typeof response === "object" &&
    response !== null &&
    "errors" in response &&
    Array.isArray((response as any).errors)
  );
};

export type TCollection = IResource[];

interface IPaginationLink {
  active: boolean;
  label: string;
  url: string | null;
}

export interface IPagination {
  currentPage: number;
  from: number;
  lastPage: number;
  links: IPaginationLink[];
  path: string;
  perPage: number;
  to: number;
  total: number;
}
