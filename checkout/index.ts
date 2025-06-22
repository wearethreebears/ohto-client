import invoke, { EAPI } from "../invoke";

import type { TProductRequestWith } from "../types/products/index.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import {
  ICheckoutProcessOrderRequest,
  ICheckoutProcessOrderResponse,
  ICheckoutShowRequest,
  ICheckoutShowResponse,
} from "../types/checkout/checkout";

export interface IApiCheckout {
  show(data?: TRequestData<any>): any;
  processOrder(
    data?: TRequestData<any, TProductRequestWith>
  ): TResponseData<any>;
}

export default function checkout(): IApiCheckout {
  const show = (
    data?: TRequestData<ICheckoutShowRequest>
  ): TResponseData<ICheckoutShowResponse> => {
    const request: IRequest = {
      method: "post",
      path: "/checkout/show",
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  const processOrder = (
    data?: TRequestData<ICheckoutProcessOrderRequest, TProductRequestWith>
  ): TResponseData<ICheckoutProcessOrderResponse> => {
    const request: IRequest = {
      method: "post",
      path: "/checkout/charge",
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    show,
    processOrder,
  };
}
