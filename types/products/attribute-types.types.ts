import type { IResource } from "../response.types";
import type { TProductAttributesCollection } from "./attributes.types";

export interface IProductAttributeTypeRequesTRequestData {
  search?: string;
}

export type TProductAttributeTypeRequestWith = (
  | "attributes"
  | "attributes.type"
)[];

export interface IStoreProductAttributeTypeRequest {
  title: string;
  slug: string;
}

export interface IUpdateProductAttributeTypeRequest {
  id: number;
  title: string;
  slug: string;
}

export interface IEditProductAttributeTypeRequest {}

export interface IProductAttributeTypesResource extends IResource {
  title: string;
  slug: string;
  attributes?: TProductAttributesCollection;
}

export type TProductAttributeTypesCollection = IProductAttributeTypesResource[];
