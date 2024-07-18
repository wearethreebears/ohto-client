import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import invoke from "../invoke";
import type {
  IAdminLoginRequest,
  IAdminLoginResponse,
} from "../types/auth/admin/admin.types";

export interface IApiAuthAdmin {
  login(
    data: TRequestData<IAdminLoginRequest>
  ): TResponseData<IAdminLoginResponse>;
}

export default function admin(): IApiAuthAdmin {
  const login = (
    data: TRequestData<IAdminLoginRequest>
  ): TResponseData<IAdminLoginResponse> => {
    const request: IRequest = {
      method: "post",
      path: "/login-admin",
    };

    return invoke(request, data);
  };

  return {
    login,
  };
}
