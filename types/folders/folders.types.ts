import type { IResource } from "../response.types";
import type { TFileCollection } from "./files.types";

export interface IFolderRequestRequestData {
  parentFolder?: number | null;
}

export type TFolderRequestWith = (
  | "files"
  | "folders"
  | "folders.folders"
  | "parentFolder"
  | "parentFolder.parentFolder"
)[];

export interface IStoreFolderRequest {
  parentId: number;
  title: string;
  slug: string;
}

export interface IEditFolderRequest {}

export interface IFolderResource extends IResource {
  parentFolder?: IFolderResource;
  title: string;
  slug: string;
  files?: TFileCollection;
  folders?: TFolderCollection;
}

export type TFolderCollection = IFolderResource[];
