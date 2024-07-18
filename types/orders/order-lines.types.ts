import type { IProductVariantResource } from "../products/variants.types";
import type { IResource } from "../response.types";

export interface IOrderLineResource extends IResource {
  productVariant: IProductVariantResource;
  quantity: number;
  lineTotal: number;
  unitTotal: number;
}

export type TOrderLineCollection = IOrderLineResource[];
