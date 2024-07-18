import type { IResource } from "../response.types";

export interface ISegmentRequestFilters {
  search: string;
}

export type TSegmentRequestWith = [];

export interface ISegmentResource extends IResource {
  title: string;
  slug: string;
}

export type TSegmentCollection = ISegmentResource[];
