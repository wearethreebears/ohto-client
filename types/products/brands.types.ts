import type { IResource } from "../response.types";

export type TBrandRequestWith = [];

export interface IBrandResource extends IResource {
  title: string;
  slug: string;
}

export type TBrandCollection = IBrandResource[];
