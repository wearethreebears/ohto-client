import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";
import type {
  IEditProductCollectionRequest,
  IProductCollectionResource,
  IStoreProductCollectionRequest,
  IUpdateProductCollectionRequest,
  TProductCollectionCollection,
  TProductCollectionRequestWith,
} from "../../types/product-collections/index.types";
import type { TProductRequestWith } from "../../types/products/index.types";

export interface IApiStaffProductCollections {
  all(
    data?: TRequestData<{}, TProductRequestWith>
  ): TResponseData<TProductCollectionCollection>;
  store(
    data?: TRequestData<IStoreProductCollectionRequest>
  ): TResponseData<IProductCollectionResource>;
  update(
    data?: TRequestData<IUpdateProductCollectionRequest>
  ): TResponseData<IProductCollectionResource>;
  edit(
    slug: string,
    data?: TRequestData<
      IEditProductCollectionRequest,
      TProductCollectionRequestWith
    >
  ): TResponseData<IProductCollectionResource>;
  destroy(data: TTrash): TResponseData<IProductCollectionResource>;
}

export default function productCollections(): IApiStaffProductCollections {
  const all = (): TResponseData<TProductCollectionCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/product-collections",
    };

    return invoke(request, null, EAPI.STAFF);
  };

  const store = (
    data?: TRequestData<IStoreProductCollectionRequest>
  ): TResponseData<IProductCollectionResource> => {
    const request: IRequest = {
      method: "post",
      path: "/product-collections/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const update = (
    data?: TRequestData<IUpdateProductCollectionRequest>
  ): TResponseData<IProductCollectionResource> => {
    const request: IRequest = {
      method: "post",
      path: "/product-collections/update",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<IEditProductCollectionRequest>
  ): TResponseData<IProductCollectionResource> => {
    const request: IRequest = {
      method: "get",
      path: `/product-collections/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IProductCollectionResource> => {
    const request: IRequest = {
      method: "post",
      path: `/product-collections/destroy`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    all,
    destroy,
    edit,
    store,
    update,
  };
}
