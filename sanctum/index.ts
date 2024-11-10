import security, { type IApiSanctumSecurity } from "./security";

export interface IApiSanctum {
  security(): IApiSanctumSecurity;
}

export default function sanctum() {
  return {
    security,
  };
}
