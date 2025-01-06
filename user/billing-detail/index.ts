import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import { TBillingAddressCollection } from "../../types/auth/user/address.types";

export interface IApiUserBillingDetail {
  all(data?: TRequestData<any>): TResponseData<TBillingAddressCollection>;
}

export default function billingDetail(): IApiUserBillingDetail {
  const all = (
    data?: TRequestData<any>
  ): TResponseData<TBillingAddressCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/billing-details",
    };

    return invoke(request, data, EAPI.USER);
  };

  return {
    all,
  };
}
