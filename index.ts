import axios from "axios";
import auth, { IApiAuth } from "./auth";
import admin, { IApiAdmin } from "./admin";
import brands, { IApiBrands } from "./brands";
import discounts, { IApiDiscounts } from "./discounts";
import chargeTypes, { IApiChargeTypes } from "./charge-types";
import eligibleUserGroups, {
  IApiEligibleUserGroups,
} from "./eligible-user-groups";
import products, { type IApiProducts } from "./products";
import files, { IApiFiles } from "./files";
import staff, { IApiStaff } from "./staff";
import sanctum, { IApiSanctum } from "./sanctum";

axios.defaults.withCredentials = true;

const setToken = (token: string | null): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

interface IApi {
  setToken(token: string | null): void;
  admin(): IApiAdmin;
  auth(): IApiAuth;
  brands(): IApiBrands;
  discounts(): IApiDiscounts;
  eligibleUserGroups(): IApiEligibleUserGroups;
  chargeTypes(): IApiChargeTypes;
  products(): IApiProducts;
  sanctum(): IApiSanctum;
  staff(): IApiStaff;
  files(): IApiFiles;
}

export default function api(): IApi {
  return {
    setToken,
    admin,
    auth,
    brands,
    discounts,
    eligibleUserGroups,
    chargeTypes,
    products,
    sanctum,
    staff,
    files,
  };
}
