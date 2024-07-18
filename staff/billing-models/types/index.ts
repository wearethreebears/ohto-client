import invoke, { EAPI } from "../../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../../types/invoke.types";
import type {
  TBillingModelTypeCollection,
  TBillingModelTypeRequestWith,
} from "../../../types/billing-models.ts/billing-model.types";

export interface IApiStaffBillingModelsTypes {
  all(
    data?: TRequestData<object, TBillingModelTypeRequestWith>
  ): TResponseData<TBillingModelTypeCollection>;
}

export default function billingModelTypes(): IApiStaffBillingModelsTypes {
  const all = (
    data?: TRequestData<object, TBillingModelTypeRequestWith>
  ): TResponseData<TBillingModelTypeCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/billing-model-types",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    all,
  };
}
