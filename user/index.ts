import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import invoke, { EAPI } from "../invoke";
import type {
  IUserResource,
  TUserRequestWith,
} from "../types/auth/user/user.types";
import shippingDetail, { type IApiUserShippingDetail } from "./shipping-detail";
import billingDetail, { type IApiUserBillingDetail } from "./billing-detail";
import orders, { type IApiUserOrders } from "./orders";

export interface IApiUser {
  details(): TResponseData<IUserResource>;
  shippingDetail(): IApiUserShippingDetail;
  billingDetail(): IApiUserBillingDetail;
  orders(): IApiUserOrders;
  show(
    data?: TRequestData<object, TUserRequestWith>
  ): TResponseData<IUserResource>;
}

export default function user(): IApiUser {
  const details = (): TResponseData<IUserResource> => {
    const request: IRequest = {
      method: "get",
      path: "/user-details",
    };

    return invoke(request);
  };

  const show = (
    data?: TRequestData<object, TUserRequestWith>
  ): TResponseData<IUserResource> => {
    const request: IRequest = {
      method: "get",
      path: "/user/show",
    };

    return invoke(request, data, EAPI.USER);
  };

  return {
    details,
    shippingDetail,
    billingDetail,
    orders,
    show,
  };
}
