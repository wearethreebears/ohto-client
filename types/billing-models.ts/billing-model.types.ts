import type { IResource } from "../response.types";

export type TBillingModelType = "ONE_OFF" | "RECURRING";

export interface IBillingModelTypeResource extends IResource {
  title: string;
  slug: TBillingModelType;
  billingModels?: TBillingModelCollection;
}

export interface IBillingModelResource extends IResource {
  title: string;
  billingModelType?: IBillingModelTypeResource;
}

export type TBillingModelCollection = IBillingModelResource[];
export type TBillingModelTypeCollection = IBillingModelTypeResource[];

export type TBillingModelRequestWith = ["billingModelType"];
export type TBillingModelTypeRequestWith = ["billingModels"];
