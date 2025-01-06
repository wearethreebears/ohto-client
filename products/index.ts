import invoke, { EAPI } from "../invoke";
import attributes, { type IApiProductAttributes } from "./attributes";
import attributeTypes, {
  type IApiProductAttributeTypes,
} from "./attribute-types";
import variants, { type IApiProductVariants } from "./variants";
import type {
  IProductResource,
  IShowProductRequest,
  TProductCollection,
  TProductRequestWith,
} from "../types/products/index.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

export interface IApiProducts {
  all(
    data?: TRequestData<object, TProductRequestWith>
  ): TResponseData<TProductCollection>;
  show(
    slug: string,
    data?: TRequestData<IShowProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource>;
  attributes(): IApiProductAttributes;
  attributeTypes(): IApiProductAttributeTypes;
  variants(): IApiProductVariants;
}

export default function products(): IApiProducts {
  const all = (
    data?: TRequestData<object, TProductRequestWith>
  ): TResponseData<TProductCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/products",
    };

    return invoke(request, data);
  };

  const show = (
    slug: string,
    data?: TRequestData<IShowProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource> => {
    const request: IRequest = {
      method: "get",
      path: `/products/${slug}`,
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    all,
    show,
    attributes,
    attributeTypes,
    variants,
  };
}
