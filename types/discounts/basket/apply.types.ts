import { IBasketLinesLineRequest } from "../../basket/lines";

export interface IApplyDiscountToBasketRequest {
  discount: string;
  lines: IBasketLinesLineRequest[];
}
