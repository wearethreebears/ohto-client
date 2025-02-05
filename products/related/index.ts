import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import { TProductCollection } from "../../types/products/index.types";
import {
  IShowRelatedProductsRequest,
  TRelatedProductsRequestWith,
} from "../../types/products/related.types";

export interface IApiRelatedProducts {
  show(
    slug: string,
    data?: TRequestData<
      IShowRelatedProductsRequest,
      TRelatedProductsRequestWith
    >
  ): TResponseData<TProductCollection>;
}

export default function related(): IApiRelatedProducts {
  const show = (
    slug: string,
    data?: TRequestData<
      IShowRelatedProductsRequest,
      TRelatedProductsRequestWith
    >
  ): TResponseData<TProductCollection> => {
    const request: IRequest = {
      method: "get",
      path: `/products/${slug}/related`,
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    show,
  };
}
