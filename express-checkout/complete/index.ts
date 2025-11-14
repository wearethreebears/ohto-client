import invoke, { EAPI } from "../../invoke";

import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
export interface IApiExpressCheckout {
  index(data?: TRequestData<any>): TResponseData<any>;
}

export default function complete() {
  const index = (data): any => {
    const request: IRequest = {
      method: "post",
      path: "/express-checkout-complete",
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    index,
  };
}
