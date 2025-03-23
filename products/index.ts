import invoke, { EAPI } from "../invoke";
import attributes, { type IApiProductAttributes } from "./attributes";
import attributeTypes, {
  type IApiProductAttributeTypes,
} from "./attribute-types";
import variants, { type IApiProductVariants } from "./variants";
import related, { type IApiRelatedProducts } from "./related";
import type {
  IIndexProductRequest,
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
    data?: TRequestData<IIndexProductRequest, TProductRequestWith>
  ): TResponseData<TProductCollection>;
  show(
    slug: string,
    data?: TRequestData<IShowProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource>;
  attributes(): IApiProductAttributes;
  attributeTypes(): IApiProductAttributeTypes;
  variants(): IApiProductVariants;
  related(): IApiRelatedProducts;
}

export default function products(): IApiProducts {
  const all = (
    data?: TRequestData<IIndexProductRequest, TProductRequestWith>
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
    related,
  };
}
