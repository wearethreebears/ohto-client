import admin, { IApiAuthAdmin } from "./admin";

export interface IApiAuth {
  admin(): IApiAuthAdmin;
}

export default function auth(): IApiAuth {
  return {
    admin,
  };
}
