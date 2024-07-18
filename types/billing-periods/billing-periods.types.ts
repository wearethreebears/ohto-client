import type { IResource } from "../response.types";

export type TBillingUnitType = "DAYS" | "MONTHS" | "YEARS";

export interface IBillingPeriodResource extends IResource {
  title: string;
  billingUnit: number;
  billingUnitType: TBillingUnitType;
}

export type TBillingPeriodCollection = IBillingPeriodResource[];

export type TBillingPeriodRequestWith = [];
