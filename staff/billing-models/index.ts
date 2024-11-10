import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type {
  TBillingModelCollection,
  TBillingModelRequestWith,
} from "../../types/billing-models.ts/billing-model.types";
import types, { type IApiStaffBillingModelsTypes } from "./types";

export interface IApiStaffBillingModels {
  all(
    data?: TRequestData<object, TBillingModelRequestWith>
  ): TResponseData<TBillingModelCollection>;
  types(): IApiStaffBillingModelsTypes;
}

export default function billingModels(): IApiStaffBillingModels {
  const all = (
    data?: TRequestData<object, TBillingModelRequestWith>
  ): TResponseData<TBillingModelCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/billing-models",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    all,
    types,
  };
}
