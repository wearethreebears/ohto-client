import axios from "axios";
import auth, { type IApiAuth } from "./auth";
import admin, { type IApiAdmin } from "./admin";
import brands, { type IApiBrands } from "./brands";
import discounts, { type IApiDiscounts } from "./discounts";
import chargeTypes, { type IApiChargeTypes } from "./charge-types";
import eligibleUserGroups, {
  type IApiEligibleUserGroups,
} from "./eligible-user-groups";
import products, { type IApiProducts } from "./products";
import files, { type IApiFiles } from "./files";
import staff, { type IApiStaff } from "./staff";
import sanctum, { type IApiSanctum } from "./sanctum";

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
