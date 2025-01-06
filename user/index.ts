import type { IRequest, TResponseData } from "../types/invoke.types";
import invoke from "../invoke";
import type { IUserResource } from "../types/auth/user/user.types";
import shippingDetail, { type IApiUserShippingDetail } from "./shipping-detail";
import billingDetail, { type IApiUserBillingDetail } from "./billing-detail";
import orders, { type IApiUserOrders } from "./orders";

export interface IApiUser {
  details(): TResponseData<IUserResource>;
  shippingDetail(): IApiUserShippingDetail;
  billingDetail(): IApiUserBillingDetail;
  orders(): IApiUserOrders;
}

export default function user(): IApiUser {
  const details = (): TResponseData<IUserResource> => {
    const request: IRequest = {
      method: "get",
      path: "/user",
    };

    return invoke(request);
  };

  return {
    details,
    shippingDetail,
    billingDetail,
    orders,
  };
}
