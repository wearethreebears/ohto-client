import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type {
  IOrderResource,
  IShowOrderRequest,
  IStoreOrderRequest,
  TOrderRequestWith,
} from "../../types/orders/orders.types";

export interface IApiUserOrders {
  show(
    id: string,
    data?: TRequestData<IShowOrderRequest, TOrderRequestWith>
  ): TResponseData<IOrderResource>;
  store(data: TRequestData<IStoreOrderRequest>): TResponseData<IOrderResource>;
}

export const PATH_DEFAULT_ORDERS = "/orders";

export default function orders(): IApiUserOrders {
  const show = (
    id: string,
    data?: TRequestData<IShowOrderRequest, TOrderRequestWith>
  ): TResponseData<IOrderResource> => {
    const request: IRequest = {
      method: "get",
      path: `/orders/show/${id}`,
    };

    return invoke(request, data, EAPI.USER);
  };

  const store = (
    data: TRequestData<IStoreOrderRequest>
  ): TResponseData<any> => {
    const request: IRequest = {
      method: "post",
      path: "/orders/store",
    };

    return invoke(request, data, EAPI.USER);
  };

  return {
    show,
    store,
  };
}
