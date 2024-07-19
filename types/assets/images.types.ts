import { IResource } from "../response.types";

export interface IStoreImageRequest {
  file: File;
  title: string;
  slug: string;
  alt?: string;
  type: "IMAGE";
}

export interface IImageResource extends IResource {
  title: string;
  slug: string;
  alt: string;
}

export type TImageRequestWith = [];
