import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";
import type {
  IDiscountResource,
  IEditDiscountRequest,
  IStoreDiscountRequest,
  IUpdateDiscountRequest,
  TDiscountCollection,
  TDiscountRequestWith,
} from "../../types/discounts/discounts.types";

export interface IApiStaffDiscounts {
  all(
    data?: TRequestData<object, TDiscountRequestWith>
  ): TResponseData<TDiscountCollection>;
  store(
    data?: TRequestData<IStoreDiscountRequest, TDiscountRequestWith>
  ): TResponseData<IDiscountResource>;
  update(
    data?: TRequestData<IUpdateDiscountRequest, TDiscountRequestWith>
  ): TResponseData<IDiscountResource>;
  edit(
    slug: string,
    data?: TRequestData<IEditDiscountRequest, TDiscountRequestWith>
  ): TResponseData<IDiscountResource>;
  destroy(data: TTrash): TResponseData<IDiscountResource>;
}

export default function discounts(): IApiStaffDiscounts {
  const all = (
    data?: TRequestData<object, TDiscountRequestWith>
  ): TResponseData<TDiscountCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/discounts",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const store = (
    data?: TRequestData<IStoreDiscountRequest, TDiscountRequestWith>
  ): TResponseData<IDiscountResource> => {
    const request: IRequest = {
      method: "post",
      path: "/discounts/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const update = (
    data?: TRequestData<IUpdateDiscountRequest, TDiscountRequestWith>
  ): TResponseData<IDiscountResource> => {
    const request: IRequest = {
      method: "post",
      path: "/discounts/update",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<IEditDiscountRequest, TDiscountRequestWith>
  ): TResponseData<IDiscountResource> => {
    const request: IRequest = {
      method: "get",
      path: `/discounts/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IDiscountResource> => {
    const request: IRequest = {
      method: "post",
      path: `/discounts/destroy`,
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
