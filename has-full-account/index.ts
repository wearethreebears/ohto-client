import invoke, { EAPI } from "../invoke";

import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import { type IHasFullAccountRequest } from "../types/has-full-account";

export interface IApiHasFullAccount {
  find(data?: TRequestData<IHasFullAccountRequest>): TResponseData<boolean>;
}

export default function hasFullAccount(): IApiHasFullAccount {
  const find = (
    data?: TRequestData<IHasFullAccountRequest>
  ): TResponseData<boolean> => {
    const request: IRequest = {
      method: "post",
      path: "/has-full-account",
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    find,
  };
}
