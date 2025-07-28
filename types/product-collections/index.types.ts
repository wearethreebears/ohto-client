import type { TProductCollection } from "../products/index.types";
import type { IResource } from "../response.types";

export type TProductCollectionRequestWith = (
  | "products"
  | "products.mediaFiles"
)[];

export interface IProductCollectionResource extends IResource {
  title: string;
  slug: string;
  products?: TProductCollection;
}

export type TProductCollectionCollection = IProductCollectionResource[];

export interface IStoreProductCollectionRequest {
  title: string;
  slug: string;
  products: number[];
}

export interface IUpdateProductCollectionRequest {
  id: number;
  title: string;
  slug: string;
  products: number[];
}

export interface IEditProductCollectionRequest {}

export interface IShowProductCollectionRequest {}
