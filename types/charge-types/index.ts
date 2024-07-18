import type { IResource } from "../response.types";

export type TChargeTypeRequestWith = [];

export interface IChargeTypeResource extends IResource {
  title: string;
  slug: string;
}

export type TChargeTypeCollection = IChargeTypeResource[];
