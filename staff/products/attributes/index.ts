import invoke, { EAPI } from "../../../invoke";
import type {
  TRequestData,
  TResponseData,
  IRequest,
} from "../../../types/invoke.types";
import type {
  IProductAttributesResource,
  TProductAttributesRequestWith,
} from "../../../types/products/attributes.types";
import type { TTrash } from "../../../types/request.types";

export interface IStoreProductAttributeRequest {
  title: string;
  slug: string;
  type?: number;
}

export interface IUpdateProductAttributeRequest {
  id: number;
  title: string;
  slug: string;
  type?: number;
}

export interface IEditProductAttributeRequest {}

export interface IApiStaffProductsAttributes {
  store(
    data?: TRequestData<
      IStoreProductAttributeRequest,
      TProductAttributesRequestWith
    >
  ): TResponseData<IProductAttributesResource>;
  update(
    data?: TRequestData<
      IUpdateProductAttributeRequest,
      TProductAttributesRequestWith
    >
  ): TResponseData<IProductAttributesResource>;
  edit(
    slug: string,
    data?: TRequestData<
      IEditProductAttributeRequest,
      TProductAttributesRequestWith
    >
  ): TResponseData<IProductAttributesResource>;
  destroy(data: TTrash): TResponseData<IProductAttributesResource>;
}

export default function attributes(): IApiStaffProductsAttributes {
  const store = (
    data?: TRequestData<
      IStoreProductAttributeRequest,
      TProductAttributesRequestWith
    >
  ) => {
    const request: IRequest = {
      method: "post",
      path: "/product-attributes/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const update = (
    data?: TRequestData<
      IUpdateProductAttributeRequest,
      TProductAttributesRequestWith
    >
  ) => {
    const request: IRequest = {
      method: "post",
      path: "/product-attributes/update",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<
      IEditProductAttributeRequest,
      TProductAttributesRequestWith
    >
  ): TResponseData<IProductAttributesResource> => {
    const request: IRequest = {
      method: "get",
      path: `/product-attributes/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IProductAttributesResource> => {
    const request: IRequest = {
      method: "post",
      path: `/product-attributes/destroy`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    destroy,
    edit,
    store,
    update,
  };
}
