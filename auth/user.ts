import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import invoke from "../invoke";
import type {
  IUserLoginRequest,
  IUserLoginResponse,
} from "../types/auth/user/user.types";

export interface IApiAuthUser {
  login(
    data: TRequestData<IUserLoginRequest>
  ): TResponseData<IUserLoginResponse>;
}

export default function user(): IApiAuthUser {
  const login = (
    data: TRequestData<IUserLoginRequest>
  ): TResponseData<IUserLoginResponse> => {
    const request: IRequest = {
      method: "post",
      path: "/login-user",
    };

    return invoke(request, data);
  };

  return {
    login,
  };
}
