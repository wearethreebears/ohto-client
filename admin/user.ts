import type { IRequest, TResponseData } from "../types/invoke.types";
import invoke from "../invoke";

export interface IApiAdminUser {
  details(): TResponseData<IApiAdminUser>;
}

export default function user(): IApiAdminUser {
  const details = (): TResponseData<IApiAdminUser> => {
    const request: IRequest = {
      method: "get",
      path: "/user",
    };

    return invoke(request);
  };

  return {
    details,
  };
}
