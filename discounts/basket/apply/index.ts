import { IDiscountResource } from "../../../types/discounts/discounts.types";
import invoke from "../../../invoke";
import type { IApplyDiscountToBasketRequest } from "../../../types/discounts/basket/apply.types.ts";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../../types/invoke.types";

export interface IApiDiscountBasketApply {
  index(
    data?: TRequestData<IApplyDiscountToBasketRequest>
  ): TResponseData<IDiscountResource>;
}

export default function apply(): IApiDiscountBasketApply {
  const index = (
    data?: TRequestData<IApplyDiscountToBasketRequest>
  ): TResponseData<IDiscountResource> => {
    const request: IRequest = {
      method: "post",
      path: "/discounts/basket/apply",
    };

    return invoke(request, data);
  };

  return {
    index,
  };
}
