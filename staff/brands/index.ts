import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";
import type {
  IBrandResource,
  IEditBrandRequest,
  IStoreBrandRequest,
  IUpdateBrandRequest,
  TBrandRequestWith,
} from "../../types/products/brands.types";

export interface IApiStaffBrands {
  store(
    data?: TRequestData<IStoreBrandRequest, TBrandRequestWith>
  ): TResponseData<IBrandResource>;
  update(
    data?: TRequestData<IUpdateBrandRequest, TBrandRequestWith>
  ): TResponseData<IBrandResource>;
  edit(
    slug: string,
    data?: TRequestData<IEditBrandRequest, TBrandRequestWith>
  ): TResponseData<IBrandResource>;
  destroy(data: TTrash): TResponseData<IBrandResource>;
}

export default function brands(): IApiStaffBrands {
  const store = (
    data?: TRequestData<IStoreBrandRequest, TBrandRequestWith>
  ): TResponseData<IBrandResource> => {
    const request: IRequest = {
      method: "post",
      path: "/brands/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const update = (
    data?: TRequestData<IUpdateBrandRequest, TBrandRequestWith>
  ): TResponseData<IBrandResource> => {
    const request: IRequest = {
      method: "post",
      path: "/brands/update",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<IEditBrandRequest, TBrandRequestWith>
  ): TResponseData<IBrandResource> => {
    const request: IRequest = {
      method: "get",
      path: `/brands/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IBrandResource> => {
    const request: IRequest = {
      method: "post",
      path: `/brands/destroy`,
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
