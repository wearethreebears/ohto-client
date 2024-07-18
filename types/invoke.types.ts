import type { IPagination } from "./response.types";

type TRequestMethod = "post" | "get" | "image";

export interface IRequest {
  method: TRequestMethod;
  path: string;
}

export interface IQueryData {
  [key: string]:
    | undefined
    | null
    | string
    | number
    | (null | string | number)[];
  id?: string[];
  search?: string;
}

export type TRequestData<
  T extends {},
  With extends Array<any> = [],
  Filters extends {} = {}
> = T &
  Filters & {
    with?: With;
    withPlusTrashed?: With;
    plusTrashed?: boolean;
  };

export type TResponseData<T extends {}> = Promise<{
  data: T;
  meta?: IPagination;
}>;
