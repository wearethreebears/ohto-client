import invoke from "../../invoke";
import type {
  TDiscountUnitTypeCollection,
  TDiscountUnitTypeRequestWith,
} from "../../types/discounts/discount-unit-types/discount-unit-types.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";

export interface IApiDiscountUnitTypes {
  all(
    data?: TRequestData<
      TDiscountUnitTypeCollection,
      TDiscountUnitTypeRequestWith
    >
  ): TResponseData<TDiscountUnitTypeCollection>;
}

export default function discountUnitTypes(): IApiDiscountUnitTypes {
  const all = (
    data?: TRequestData<
      TDiscountUnitTypeCollection,
      TDiscountUnitTypeRequestWith
    >
  ) => {
    const request: IRequest = {
      method: "get",
      path: "/discount-unit-types",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
