import type { IResource } from "../../response.types";

export interface IAdminLoginRequest {
  email: string;
  password: string;
}

export interface IAdminLoginResponse {
  token: string;
  user: IAdminResource;
}

export interface IAdminResource extends IResource {
  firstName: string;
  lastName: string;
  email: string;
}
