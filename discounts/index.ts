import basket, { IApiDiscountBasket } from "./basket";
import discountUnitTypes, {
  type IApiDiscountUnitTypes,
} from "./discount-unit-types";

export interface IApiDiscounts {
  discountUnitTypes(): IApiDiscountUnitTypes;
  basket(): IApiDiscountBasket;
}

export default function discounts() {
  return {
    discountUnitTypes,
    basket,
  };
}
