import { TFilterSort } from "../invoke.types";
import type { TBrandCollection } from "../products/brands.types";
import type { IResource } from "../response.types";

export type TProductFilterRequestWith = [];

export type TProductFiltersFilterOrderBy = "id" | "title";

export interface IProductFilterFilters {
  orderBy?: TProductFiltersFilterOrderBy;
  sort?: TFilterSort;
}

export interface IProductFilterResource extends IResource {
  brands: TBrandCollection;
}
