import type { IResource } from "../response.types";

export interface IIndexProductCategoryRequest {
  search?: string;
}

export type TProductCategoryRequestWith = "products"[];

export interface IProductCategoryResource extends IResource {
  title: string;
  slug: string;
}

export type TProductCategoryCollection = IProductCategoryResource[];

export interface IStoreProductCategoryRequest {
  title: string;
  slug: string;
}

export interface IUpdateProductCategoryRequest {
  id: number;
  title: string;
  slug: string;
}

export interface IEditProductCategoryRequest {}

export interface IShowProductCategoryRequest {}
