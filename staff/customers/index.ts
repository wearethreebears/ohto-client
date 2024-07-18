import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";

import type {
  IUserRequestFilters,
  IUserResource,
  TUserCollection,
  TUserRequestWith,
} from "../../types/auth/user/user.types";

export interface IEditUserRequest {}

export interface IApiStaffCustomers {
  all(
    data?: TRequestData<{}, TUserRequestWith, IUserRequestFilters>
  ): TResponseData<TUserCollection>;
  edit(
    id: string,
    data?: TRequestData<IEditUserRequest, TUserRequestWith>
  ): TResponseData<IUserResource>;
  destroy(data: TTrash): TResponseData<IUserResource>;
}

export default function customers(): IApiStaffCustomers {
  const all = (
    data?: TRequestData<{}, TUserRequestWith, IUserRequestFilters>
  ): TResponseData<TUserCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/customers",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    id: string,
    data?: TRequestData<IEditUserRequest, TUserRequestWith>
  ): TResponseData<IUserResource> => {
    const request: IRequest = {
      method: "get",
      path: `/customers/edit/${id}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<IUserResource> => {
    const request: IRequest = {
      method: "post",
      path: `/customers/destroy`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    all,
    destroy,
    edit,
  };
}
