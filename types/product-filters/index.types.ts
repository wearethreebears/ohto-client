import { TBrandCollection } from "../products/brands.types";
import type { IResource } from "../response.types";

export interface IProductFilterResource extends IResource {
  brands: TBrandCollection;
}
