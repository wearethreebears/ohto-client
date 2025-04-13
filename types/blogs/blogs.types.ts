import type { IResource } from "../response.types";
import type { JSONContent } from "@tiptap/core";

export type TBlogRequestWith = "articles"[];

export interface IBlogResource extends IResource {
  title: string;
  slug: string;
  description?: JSONContent;
}

export type TBlogCollection = IBlogResource[];
