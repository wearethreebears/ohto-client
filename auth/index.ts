import admin, { type IApiAuthAdmin } from "./admin";
import user, { type IApiAuthUser } from "./user";

export interface IApiAuth {
  admin(): IApiAuthAdmin;
  user(): IApiAuthUser;
}

export default function auth(): IApiAuth {
  return {
    user,
    admin,
  };
}
