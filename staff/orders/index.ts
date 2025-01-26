import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";

import type {
  IEditOrderRequest,
  IOrderResource,
  TOrderCollection,
  TOrderRequestWith,
} from "../../types/orders/orders.types";

export interface IApiStaffOrders {
  all(
    data?: TRequestData<object, TOrderRequestWith>
  ): TResponseData<TOrderCollection>;
  edit(
    id: string,
    data?: TRequestData<IEditOrderRequest, TOrderRequestWith>
  ): TResponseData<IOrderResource>;
  destroy(data: TTrash): TResponseData<IOrderResource>;
  dispatch(id: string): TResponseData<IOrderResource>;
}

export default function orders(): IApiStaffOrders {
  const all = (
    data?: TRequestData<object, TOrderRequestWith>
  ): TResponseData<TOrderCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/orders",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    id: string,
    data?: TRequestData<IEditOrderRequest, TOrderRequestWith>
  ): TResponseData<IOrderResource> => {
    const request: IRequest = {
      method: "get",
      path: `/orders/edit/${id}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IOrderResource> => {
    const request: IRequest = {
      method: "post",
      path: `/orders/destroy`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const dispatch = (id: string): TResponseData<IOrderResource> => {
    const request: IRequest = {
      method: "post",
      path: `/orders/status/dispatch/${id}`,
    };

    return invoke(request, undefined, EAPI.STAFF);
  };

  return {
    all,
    destroy,
    edit,
    dispatch,
  };
}
