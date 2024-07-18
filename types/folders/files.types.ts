import type { IResource } from "../response.types";
import type { ISegmentResource } from "../segments/segments.types";
import type { IFolderResource } from "./folders.types";

export type TFileRequestWith = "folder"[];

export enum EFileType {
  IMAGE = "IMAGE",
}

export interface IStoreFileRequest {
  title: string;
  slug: string;
  type: EFileType;
  folderId: number;
  fileId: number;
}

export interface IFileResource extends IResource {
  title: string;
  slug: string;
  type: EFileType;
  folder: IFolderResource;
  segment: ISegmentResource;
}

export type TFileCollection = IFileResource[];
