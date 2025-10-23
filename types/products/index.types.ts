import type { JSONContent } from "@tiptap/core";
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
import type {
  IStoreVariantRequest,
  TProductVariantCollection,
} from "./variants.types";
import { TProductCategoryCollection } from "../product-categories/index.types";

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
  | "categories"
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
  description?: JSONContent;
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
  categories?: TProductCategoryCollection;
}

export interface IStoreProductRequest {
  title: string;
  slug: string;
  description?: string | JSONContent;
  brand?: number;
  status?: EProductStatus;
  productCategories?: number[];
  productAttributeTypes?: number[];
  productAttributes?: number[];
  productVariants?: IStoreVariantRequest[];
  mediaFiles?: number[];
}

export interface IUpdateProductRequest {
  id: number;
  title: string;
  slug: string;
  productCategories?: number[];
  description?: string | JSONContent;
  brand?: number;
  status?: EProductStatus;
  productAttributeTypes?: number[];
  productAttributes?: number[];
  productVariants?: IStoreVariantRequest[];
  mediaFiles?: number[];
}

export interface IEditProductRequest {}

export interface IIndexProductRequest {
  brand?: string | string[];
  search?: string;
}

export interface IShowProductRequest {}

export type TProductCollection = IProductResource[];
