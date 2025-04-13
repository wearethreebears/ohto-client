import type { IResource } from "../response.types";
import type { JSONContent } from "@tiptap/core";
import type { IFileResource } from "../../types/folders/files.types";

export type TArticleRequestWith = ("blog" | "previewMedia")[];

export interface IArticleResource extends IResource {
  title: string;
  slug: string;
  description?: JSONContent;
  previewMedia?: IFileResource;
}

export type TArticleCollection = IArticleResource[];
