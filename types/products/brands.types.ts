import type { IResource } from "../response.types";

export type TBrandRequestWith = [];

export interface IBrandResource extends IResource {
  title: string;
  slug: string;
  description?: string;
}

export interface IStoreBrandRequest {
  title: string;
  slug: string;
  description?: string;
}

export interface IUpdateBrandRequest {
  id: number;
  title: string;
  slug: string;
  description?: string;
}

export interface IEditBrandRequest {}

export type TBrandCollection = IBrandResource[];
