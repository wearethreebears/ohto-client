import security, { IApiSanctumSecurity } from "./security";

export interface IApiSanctum {
  security(): IApiSanctumSecurity;
}

export default function sanctum() {
  return {
    security,
  };
}
