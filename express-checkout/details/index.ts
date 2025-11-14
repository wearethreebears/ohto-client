import invoke, { EAPI } from "../../invoke";

import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
export interface IApiExpressCheckout {
  index(data?: TRequestData<any>): TResponseData<any>;
}

export default function details() {
  const index = (data: any): any => {
    const request: IRequest = {
      method: "post",
      path: "/express-checkout-details",
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    index,
  };
}
