import type { IRequest } from "../types/invoke.types";
import invoke from "../invoke";

export interface IApiAdminUser {
  details(): any;
}

export default function user(): IApiAdminUser {
  const details = () => {
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
