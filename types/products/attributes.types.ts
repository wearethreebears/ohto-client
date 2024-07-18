import type { IResource } from "../response.types";
import type { IProductAttributeTypesResource } from "./attribute-types.types";

export interface IProductAttributesRequestRequestData {
  type?: number[];
}

export type TProductAttributesRequestWith = "type"[];

export interface IProductAttributesResource extends IResource {
  title: string;
  slug: string;
  type?: IProductAttributeTypesResource;
}

export type TProductAttributesCollection = IProductAttributesResource[];
