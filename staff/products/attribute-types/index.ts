import invoke, { EAPI } from "../../../invoke";
import type {
  TRequestData,
  TResponseData,
  IRequest,
} from "../../../types/invoke.types";
import type { TTrash } from "../../../types/request.types";
import type {
  IProductAttributeTypesResource,
  TProductAttributeTypeRequestWith,
} from "../../../types/products/attribute-types.types";
import { IProductAttributesResource } from "../../../types/products/attributes.types";

export interface IStoreProductAttributeTypeRequest {
  title: string;
  slug: string;
}

export interface IUpdateProductAttributeTypeRequest {
  id: number;
  title: string;
  slug: string;
}

export interface IEditProductAttributeTypeRequest {}

export interface IApiStaffProductsAttributeTypes {
  store(
    data?: TRequestData<
      IStoreProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributesResource>;
  update(
    data?: TRequestData<
      IUpdateProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributesResource>;
  edit(
    slug: string,
    data?: TRequestData<
      IEditProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributesResource>;
  destroy(data: TTrash): TResponseData<IProductAttributesResource>;
}

export default function attributeTypes(): IApiStaffProductsAttributeTypes {
  const store = (
    data?: TRequestData<
      IStoreProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributesResource> => {
    const request: IRequest = {
      method: "post",
      path: "/product-attribute-types/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const update = (
    data?: TRequestData<
      IUpdateProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributesResource> => {
    const request: IRequest = {
      method: "post",
      path: "/product-attribute-types/update",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<
      IEditProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributeTypesResource> => {
    const request: IRequest = {
      method: "get",
      path: `/product-attribute-types/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IProductAttributesResource> => {
    const request: IRequest = {
      method: "post",
      path: `/product-attribute-types/destroy`,
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
