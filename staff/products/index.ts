import type {
  IEditProductRequest,
  IProductResource,
  IStoreProductRequest,
  IUpdateProductRequest,
  TProductRequestWith,
} from "../../types/products/index.types";
import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";
import attributeTypes, {
  IApiStaffProductsAttributeTypes,
} from "./attribute-types";
import attributes, { IApiStaffProductsAttributes } from "./attributes";

export interface IApiStaffProducts {
  store(
    data?: TRequestData<IStoreProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource>;
  update(
    data?: TRequestData<IUpdateProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource>;
  edit(
    slug: string,
    data?: TRequestData<IEditProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource>;
  destroy(data: TTrash): TResponseData<IProductResource>;
  attributeTypes(): IApiStaffProductsAttributeTypes;
  attributes(): IApiStaffProductsAttributes;
}

export default function products(): IApiStaffProducts {
  const store = (
    data?: TRequestData<IStoreProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource> => {
    const request: IRequest = {
      method: "post",
      path: "/products/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const update = (
    data?: TRequestData<IUpdateProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource> => {
    const request: IRequest = {
      method: "post",
      path: "/products/update",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<IEditProductRequest, TProductRequestWith>
  ): TResponseData<IProductResource> => {
    const request: IRequest = {
      method: "get",
      path: `/products/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IProductResource> => {
    const request: IRequest = {
      method: "post",
      path: `/products/destroy`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    destroy,
    edit,
    store,
    update,
    attributeTypes,
    attributes,
  };
}
