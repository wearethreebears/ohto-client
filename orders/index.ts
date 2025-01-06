import invoke, { EAPI } from "../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import type {
  IOrderResource,
  IStoreOrderRequest,
} from "../types/orders/orders.types";

export interface IApiOrders {
  store(data: TRequestData<IStoreOrderRequest>): TResponseData<IOrderResource>;
}

export const PATH_DEFAULT_ORDERS = "/orders";

export default function orders(): IApiOrders {
  const store = (
    data: TRequestData<IStoreOrderRequest>
  ): TResponseData<any> => {
    const request: IRequest = {
      method: "post",
      path: "/orders/store",
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    store,
  };
}
