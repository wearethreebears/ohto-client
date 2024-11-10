import discountUnitTypes, {
  type IApiDiscountUnitTypes,
} from "./discount-unit-types";

export interface IApiDiscounts {
  discountUnitTypes(): IApiDiscountUnitTypes;
}

export default function discounts() {
  return {
    discountUnitTypes,
  };
}
