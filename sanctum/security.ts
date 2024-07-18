import type { IRequest, TResponseData } from "../types/invoke.types";
import invoke from "../invoke";

export interface IApiSanctumSecurity {
  csrf(): TResponseData<any>;
}

export default function security(): IApiSanctumSecurity {
  const csrf = () => {
    const request: IRequest = {
      method: "get",
      path: "/sanctum/csrf-cookie",
    };

    return invoke(request);
  };

  return {
    csrf,
  };
}
