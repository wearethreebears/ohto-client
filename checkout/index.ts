import invoke, { EAPI } from "../invoke";

import type { TProductRequestWith } from "../types/products/index.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

export interface IApiProducts {
  processOrder(
    data?: TRequestData<any, TProductRequestWith>
  ): TResponseData<any>;
}

export default function checkout(): IApiProducts {
  const processOrder = (
    data?: TRequestData<any, TProductRequestWith>
  ): TResponseData<any> => {
    const request: IRequest = {
      method: "post",
      path: "/checkout/charge",
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    processOrder,
  };
}
