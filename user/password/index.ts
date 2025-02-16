import invoke, { EAPI } from "../../invoke";
import { IUserUpdatePasswordRequest } from "../../types/auth/user/password.types";
import { IUserResource } from "../../types/auth/user/user.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";

export interface IApiUserPassword {
  update(
    data: TRequestData<IUserUpdatePasswordRequest>
  ): TResponseData<IUserResource>;
}

export default function password(): IApiUserPassword {
  const update = (
    data: TRequestData<IUserUpdatePasswordRequest>
  ): TResponseData<IUserResource> => {
    const request: IRequest = {
      method: "post",
      path: "/user/password/update",
    };

    return invoke(request, data, EAPI.USER);
  };

  return {
    update,
  };
}
