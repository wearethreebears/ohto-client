import type {
  IBillingModelResource,
  IBillingModelTypeResource,
} from "../billing-models.ts/billing-model.types";
import type { IBillingPeriodResource } from "../billing-periods/billing-periods.types";
import type { IFileResource } from "../folders/files.types";
import type { IResource } from "../response.types";
import type { TProductAttributeTypesCollection } from "./attribute-types.types";
import type { TProductAttributesCollection } from "./attributes.types";
import type { IBrandResource } from "./brands.types";
import type { TProductOptionCollection } from "./options.types";
import type { TProductVariantCollection } from "./variants.types";

export type TProductRequestWith = (
  | "brand"
  | "variants"
  | "variants.billingModelType"
  | "variants.billingModel"
  | "variants.billingPeriod"
  | "attributes"
  | "attributes.type"
  | "attributeTypes"
  | "attributeTypes.attributes"
  | "attributeTypes.attributes.type"
  | "mediaFiles"
)[];

export enum EProductStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export interface IProductMediaFileResource extends IResource {
  product?: IProductResource;
  file: IFileResource;
  order: number;
}

export interface IProductMediaFileRequest extends IResource {
  productId: number;
  file: IFileResource;
  order: number;
}

export type TProductMediaFileCollection = IProductMediaFileResource[];

export interface IProductResource extends IResource {
  title: string;
  slug: string;
  brand?: IBrandResource;
  attributes?: TProductAttributesCollection;
  attributeTypes?: TProductAttributeTypesCollection;
  variants?: TProductVariantCollection;
  options?: TProductOptionCollection;
  status?: EProductStatus;
  mediaFiles?: TProductMediaFileCollection;
  billingModelType?: IBillingModelTypeResource;
  billingModel?: IBillingModelResource;
  billingPeriod?: IBillingPeriodResource;
}

export type TProductCollection = IProductResource[];
