import invoke, { EAPI } from "../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

import {
  IIndexProductCategoryRequest,
  IProductCategoryResource,
  IShowProductCategoryRequest,
  TProductCategoryCollection,
  TProductCategoryRequestWith,
} from "../types/product-categories/index.types";

export interface IApiProductCategories {
  all(
    data?: TRequestData<
      IIndexProductCategoryRequest,
      TProductCategoryRequestWith
    >
  ): TResponseData<TProductCategoryCollection>;
  show(
    slug: string,
    data?: TRequestData<
      IShowProductCategoryRequest,
      TProductCategoryRequestWith
    >
  ): TResponseData<IProductCategoryResource>;
}

export default function productCategories(): IApiProductCategories {
  const all = (
    data?: TRequestData<
      IIndexProductCategoryRequest,
      TProductCategoryRequestWith
    >
  ): TResponseData<TProductCategoryCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/product-categories",
    };

    return invoke(request, data);
  };

  const show = (
    slug: string,
    data?: TRequestData<
      IShowProductCategoryRequest,
      TProductCategoryRequestWith
    >
  ): TResponseData<IProductCategoryResource> => {
    const request: IRequest = {
      method: "get",
      path: `/product-categories/${slug}`,
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    all,
    show,
  };
}
