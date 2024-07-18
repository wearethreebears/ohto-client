import invoke from "../invoke";
import type {
  TChargeTypeCollection,
  TChargeTypeRequestWith,
} from "../types/charge-types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

export interface IApiChargeTypes {
  all(
    data?: TRequestData<TChargeTypeCollection, TChargeTypeRequestWith>
  ): TResponseData<TChargeTypeCollection>;
}

export default function chargeTypes(): IApiChargeTypes {
  const all = (
    data?: TRequestData<TChargeTypeCollection, TChargeTypeRequestWith>
  ): TResponseData<TChargeTypeCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/charge-types",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
