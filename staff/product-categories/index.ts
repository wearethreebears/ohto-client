import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";
import type {
  IEditProductCategoryRequest,
  IProductCategoryResource,
  IStoreProductCategoryRequest,
  IUpdateProductCategoryRequest,
  TProductCategoryCollection,
  TProductCategoryRequestWith,
} from "../../types/product-categories/index.types";
import type { TProductRequestWith } from "../../types/products/index.types";

export interface IApiStaffProductCategories {
  all(
    data?: TRequestData<{}, TProductRequestWith>
  ): TResponseData<TProductCategoryCollection>;
  store(
    data?: TRequestData<IStoreProductCategoryRequest>
  ): TResponseData<IProductCategoryResource>;
  update(
    data?: TRequestData<IUpdateProductCategoryRequest>
  ): TResponseData<IProductCategoryResource>;
  edit(
    slug: string,
    data?: TRequestData<
      IEditProductCategoryRequest,
      TProductCategoryRequestWith
    >
  ): TResponseData<IProductCategoryResource>;
  destroy(data: TTrash): TResponseData<IProductCategoryResource>;
}

export default function productCategories(): IApiStaffProductCategories {
  const all = (): TResponseData<TProductCategoryCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/product-categories",
    };

    return invoke(request, null, EAPI.STAFF);
  };

  const store = (
    data?: TRequestData<IStoreProductCategoryRequest>
  ): TResponseData<IProductCategoryResource> => {
    const request: IRequest = {
      method: "post",
      path: "/product-categories/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const update = (
    data?: TRequestData<IUpdateProductCategoryRequest>
  ): TResponseData<IProductCategoryResource> => {
    const request: IRequest = {
      method: "post",
      path: "/product-categories/update",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<IEditProductCategoryRequest>
  ): TResponseData<IProductCategoryResource> => {
    const request: IRequest = {
      method: "get",
      path: `/product-categories/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IProductCategoryResource> => {
    const request: IRequest = {
      method: "post",
      path: `/product-categories/destroy`,
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
