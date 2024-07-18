import type { IResource } from "../../response.types";

export type TDiscountUnitTypeRequestWith = [];

export interface IDiscountUnitTypeResource extends IResource {
  title: string;
  slug: string;
}

export type TDiscountUnitTypeCollection = IDiscountUnitTypeResource[];
