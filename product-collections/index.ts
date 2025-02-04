import invoke, { EAPI } from "../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

import {
  IProductCollectionResource,
  IShowProductCollectionRequest,
  TProductCollectionRequestWith,
} from "../types/product-collections/index.types";

export interface IApiProductCollections {
  show(
    slug: string,
    data?: TRequestData<
      IShowProductCollectionRequest,
      TProductCollectionRequestWith
    >
  ): TResponseData<IProductCollectionResource>;
}

export default function productCollections(): IApiProductCollections {
  const show = (
    slug: string,
    data?: TRequestData<
      IShowProductCollectionRequest,
      TProductCollectionRequestWith
    >
  ): TResponseData<IProductCollectionResource> => {
    const request: IRequest = {
      method: "get",
      path: `/product-collections/${slug}`,
    };

    return invoke(request, data, EAPI.DEFAULT);
  };

  return {
    show,
  };
}
