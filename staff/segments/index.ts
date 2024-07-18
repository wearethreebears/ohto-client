import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type { TTrash } from "../../types/request.types";

import type {
  ISegmentRequestFilters,
  ISegmentResource,
  TSegmentCollection,
  TSegmentRequestWith,
} from "../../types/segments/segments.types";

export interface IEditUserRequest {}

export interface IApiStaffSegments {
  all(
    data?: TRequestData<{}, TSegmentRequestWith, ISegmentRequestFilters>
  ): TResponseData<TSegmentCollection>;
  edit(
    id: string,
    data?: TRequestData<IEditUserRequest, TSegmentRequestWith>
  ): TResponseData<ISegmentResource>;
  destroy(data: TTrash): TResponseData<ISegmentResource>;
}

export default function segments(): IApiStaffSegments {
  const all = (
    data?: TRequestData<{}, TSegmentRequestWith, ISegmentRequestFilters>
  ): TResponseData<TSegmentCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/segments",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    id: string,
    data?: TRequestData<IEditUserRequest, TSegmentRequestWith>
  ): TResponseData<ISegmentResource> => {
    const request: IRequest = {
      method: "get",
      path: `/segments/edit/${id}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const destroy = (data: TTrash): TResponseData<ISegmentResource> => {
    const request: IRequest = {
      method: "post",
      path: `/segments/destroy`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    all,
    destroy,
    edit,
  };
}
