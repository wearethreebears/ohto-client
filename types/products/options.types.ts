import type { IResource } from "../response.types";

interface IProductOptionAttributeResource {
  id: number;
  title: string;
  type_id: number;
}

type TProductOptionAttributeCollection = IProductOptionAttributeResource[];

export interface IProductOptionResource extends IResource {
  id: number;
  title: string;
  attributes: TProductOptionAttributeCollection;
}
export type TProductOptionCollection = IProductOptionResource[];
