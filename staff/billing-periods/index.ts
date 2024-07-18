import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type {
  TBillingPeriodCollection,
  TBillingPeriodRequestWith,
} from "../../types/billing-periods/billing-periods.types";

export interface IApiStaffBillingPeriods {
  all(
    data?: TRequestData<object, TBillingPeriodRequestWith>
  ): TResponseData<TBillingPeriodCollection>;
}

export default function billingModels(): IApiStaffBillingPeriods {
  const all = (
    data?: TRequestData<object, TBillingPeriodRequestWith>
  ): TResponseData<TBillingPeriodCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/billing-periods",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    all,
  };
}
