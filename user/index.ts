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
import password, { type IApiUserPassword } from "./password";

export interface IApiUser {
  shippingDetail(): IApiUserShippingDetail;
  billingDetail(): IApiUserBillingDetail;
  orders(): IApiUserOrders;
  password(): IApiUserPassword;
  show(
    data?: TRequestData<object, TUserRequestWith>
  ): TResponseData<IUserResource>;
}

export default function user(): IApiUser {
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
    shippingDetail,
    billingDetail,
    orders,
    show,
    password,
  };
}
