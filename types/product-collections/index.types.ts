import { TProductCollection } from "../products/index.types";
import type { IResource } from "../response.types";

export type TProductCollectionRequestWith = ("products", "products.mediaFiles")[];

export interface IProductCollectionResource extends IResource {
  title: string;
  slug: string;
  products?: TProductCollection;
}

export interface IShowProductCollectionRequest {}
