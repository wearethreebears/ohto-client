import apply, { IApiDiscountBasketApply } from "./apply";

export interface IApiDiscountBasket {
  apply(): IApiDiscountBasketApply;
}

export default function basket(): IApiDiscountBasket {
  return {
    apply,
  };
}
