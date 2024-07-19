import type { IResource } from "../response.types";
import type { IProductAttributeTypesResource } from "./attribute-types.types";

export interface IProductAttributesRequestRequestData {
  type?: number[];
}

export interface IStoreProductAttributeRequest {
  title: string;
  slug: string;
  type?: number;
}

export interface IUpdateProductAttributeRequest {
  id: number;
  title: string;
  slug: string;
  type?: number;
}

export interface IEditProductAttributeRequest {}

export type TProductAttributesRequestWith = "type"[];

export interface IProductAttributesResource extends IResource {
  title: string;
  slug: string;
  type?: IProductAttributeTypesResource;
}

export type TProductAttributesCollection = IProductAttributesResource[];
