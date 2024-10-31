import invoke, { EAPI } from "../../../invoke";
import type {
  TRequestData,
  TResponseData,
  IRequest,
} from "../../../types/invoke.types";
import type { TTrash } from "../../../types/request.types";
import type {
  IEditProductAttributeTypeRequest,
  IProductAttributeTypesResource,
  IStoreProductAttributeTypeRequest,
  IUpdateProductAttributeTypeRequest,
  TProductAttributeTypeRequestWith,
} from "../../../types/products/attribute-types.types";

export interface IApiStaffProductsAttributeTypes {
  store(
    data?: TRequestData<
      IStoreProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributeTypesResource>;
  update(
    data?: TRequestData<
      IUpdateProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributeTypesResource>;
  edit(
    slug: string,
    data?: TRequestData<
      IEditProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributeTypesResource>;
  destroy(data: TTrash): TResponseData<IProductAttributeTypesResource>;
}

export default function attributeTypes(): IApiStaffProductsAttributeTypes {
  const store = (
    data?: TRequestData<
      IStoreProductAttributeTypeRequest,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<IProductAttributeTypesResource> => {
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
  ): TResponseData<IProductAttributeTypesResource> => {
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

  const destroy = (
    data: TTrash
  ): TResponseData<IProductAttributeTypesResource> => {
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
