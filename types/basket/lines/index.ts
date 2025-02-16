import { IProductVariantResource } from "../../products/variants.types";

export interface IBasketLineResource {
  title: string;
  productId: number;
  productVariant: IProductVariantResource;
  quantity: number;
}

export type TBasketLineCollection = IBasketLineResource[];

export interface IBasketLinesLineRequest {
  id: number;
  quantity: number;
}

export interface IBasketLinesRequest {
  lines: IBasketLinesLineRequest[];
}
