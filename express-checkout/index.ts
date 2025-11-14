import invoke, { EAPI } from "../invoke";

import details from "./details";
import complete from "./complete";
import cancel from "./cancel";

import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
export interface IApiExpressCheckout {
  index(data?: TRequestData<any>): TResponseData<any>;
  update(data?: TRequestData<any>): TResponseData<any>;
  details: any;
  complete: any;
  cancel: any;
}

export default function expressCheckout(): IApiExpressCheckout {
  const index = (amount: number): any => {
    const request: IRequest = {
      method: "post",
      path: "/express-checkout",
    };

    return invoke(request, amount, EAPI.DEFAULT);
  };

  const update = (amount: number): any => {
    const request: IRequest = {
      method: "post",
      path: "/express-checkout/update",
    };

    return invoke(request, amount, EAPI.DEFAULT);
  };

  return {
    index,
    update,
    details,
    complete,
    cancel,
  };
}
