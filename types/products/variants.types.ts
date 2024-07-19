import type {
  IBillingModelResource,
  IBillingModelTypeResource,
  TBillingModelType,
} from "../billing-models.ts/billing-model.types";
import type { IBillingPeriodResource } from "../billing-periods/billing-periods.types";
import type { IResource } from "../response.types";
import type { TProductAttributesCollection } from "./attributes.types";
import type { IProductResource } from "./index.types";

export interface IProductVariantsRequesTRequestData {
  attributes: number[];
}

export type TProductVariantsRequestWith = "type"[];

export type TProductVariantFromAttributesCollection =
  TProductAttributesCollection[];

export interface IProductVariantResource extends IResource {
  sku?: string;
  price?: number;
  stock?: number;
  attributes?: TProductAttributesCollection;
  active?: boolean;
  product?: IProductResource;
  stripeId?: string;
  billingModelType?: IBillingModelTypeResource;
  billingModel?: IBillingModelResource;
  billingPeriod?: IBillingPeriodResource;
}

export interface IStoreVariantRequest {
  uniqueId: string;
  attributes: number[];
  price: number;
  stock: number;
  billingModelId: number | null;
  billingPeriodId: number | null;
}

export type TProductVariantCollection = IProductVariantResource[];
