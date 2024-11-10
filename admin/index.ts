import user, { type IApiAdminUser } from "./user";

export interface IApiAdmin {
  user(): IApiAdminUser;
}

export default function admin(): IApiAdmin {
  return {
    user,
  };
}
