import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import { TShippingAddressCollection } from "../../types/auth/user/address.types";

export interface IApiUserShippingDetail {
  all(data?: TRequestData<any>): TResponseData<TShippingAddressCollection>;
}

export default function shippingDetail(): IApiUserShippingDetail {
  const all = (
    data?: TRequestData<any>
  ): TResponseData<TShippingAddressCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/shipping-details",
    };

    return invoke(request, data, EAPI.USER);
  };

  return {
    all,
  };
}
