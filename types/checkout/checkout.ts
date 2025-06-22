import type {
  IDiscountResource,
  TDiscountCollection,
} from "../../types/discounts/discounts.types";
import { IBasketLinesRequest } from "../basket/lines";
import { IDeliveryOptionGroupResource } from "../delivery/options/groups/option-group.types";
import { TProductVariantCollection } from "../products/variants.types";

export interface ICheckoutShowResponseAppliedDeliveries {
  default: IDeliveryOptionGroupResource | null;
  discounted: IDeliveryOptionGroupResource | null;
}

export interface ICheckoutShowResponseAppliedDiscounts {
  products: IDiscountResource | null;
  deliveries: IDiscountResource | null;
}

export interface ICheckoutShowResponseAppliedProducts {
  total: number;
  subtotal: number;
  discount: number | null;
  lines: TProductVariantCollection;
}

export interface ICheckoutShowResponse {
  products: ICheckoutShowResponseAppliedProducts;
  deliveries: ICheckoutShowResponseAppliedDeliveries;
  appliedDiscounts: ICheckoutShowResponseAppliedDiscounts;
}

export interface ICheckoutProcessOrderResponse {}

export interface ICheckoutShowRequest extends IBasketLinesRequest {
  discount?: string;
}

export interface ICheckoutProcessOrderRequest {}
