import invoke from "../invoke";
import type {
  TEligibleUserGroupCollection,
  TEligibleUserGroupRequestWith,
} from "../types/eligible-user-groups/eligible-user-groups.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

export interface IApiEligibleUserGroups {
  all(
    data?: TRequestData<
      TEligibleUserGroupCollection,
      TEligibleUserGroupRequestWith
    >
  ): TResponseData<TEligibleUserGroupCollection>;
}

export default function eligibleUserGroups(): IApiEligibleUserGroups {
  const all = (
    data?: TRequestData<
      TEligibleUserGroupCollection,
      TEligibleUserGroupRequestWith
    >
  ) => {
    const request: IRequest = {
      method: "get",
      path: "/eligible-user-groups",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
