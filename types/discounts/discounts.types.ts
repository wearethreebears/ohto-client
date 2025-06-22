import type { IUserResource, TUserCollection } from "../auth/user/user.types";
import type { IChargeTypeResource } from "../charge-types";
import type { IEligibleUserGroupResource } from "../eligible-user-groups/eligible-user-groups.types";
import type { IResource } from "../response.types";
import type { IDiscountUnitTypeResource } from "./discount-unit-types/discount-unit-types.types";

export type TDiscountRequestWith = ("eligibleUsers" | "eligibleSegments")[];

export interface IStoreDiscountRequest {
  code?: string;
  eligibleUserGroups?: number;
  eligibleUsers?: number[];
  eligibleSegments?: number[];
  discountUnit?: number;
  discountUnitType?: number;
  totalUsesAllowed?: number;
  totalUsesAllowedPerUser?: number;
  autoApply?: boolean;
  chargeType?: number;
}

export interface IStoreDiscountRequest {
  code?: string;
  eligibleUserGroups?: number;
  eligibleUsers?: number[];
  eligibleSegments?: number[];
  discountUnit?: number;
  discountUnitType?: number;
  totalUsesAllowed?: number;
  totalUsesAllowedPerUser?: number;
  autoApply?: boolean;
  chargeType?: number;
}

export interface IUpdateDiscountRequest {
  id: number;
  code: string;
  eligibleUserGroups?: number;
  eligibleUsers?: number[];
  eligibleSegments?: number[];
  discountUnit?: number;
  discountUnitType?: number;
  totalUsesAllowed?: number;
  totalUsesAllowedPerUser?: number;
  autoApply?: boolean;
  chargeType?: number;
}

export interface IEditDiscountRequest {}

export interface IDiscountResource extends IResource {
  code: string;
  discountUnitType?: IDiscountUnitTypeResource;
  chargeType?: IChargeTypeResource;
  eligibleUserGroup?: IEligibleUserGroupResource;
  eligibleUsers?: TUserCollection;
  eligibleSegments?: TUserCollection;
  discountUnit?: number;
  totalUsesAllowed?: number;
  totalUsesAllowedPerUser?: number;
  autoApply?: boolean;
}

export type TDiscountCollection = IDiscountResource[];
