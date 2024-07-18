import type { IResource } from "../response.types";

export interface IAssetResource {
  id: number;
  title: string;
  slug: string;
}

export interface IStoreAssetRequest {
  meta: File;
  title: string;
  slug: string;
  alt?: string;
}

export type TAssetRequestWith = [];
