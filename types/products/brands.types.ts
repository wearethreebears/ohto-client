import type { TFilterSort } from "../invoke.types";
import type { IResource } from "../response.types";
import type { JSONContent } from "@tiptap/core";

export type TBrandRequestWith = [];

type TBrandFilterOrderBy = "id" | "title";

export interface IBrandFilters {
  orderBy?: TBrandFilterOrderBy;
  sort?: TFilterSort;
}

export interface IBrandResource extends IResource {
  title: string;
  slug: string;
  description?: JSONContent;
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
