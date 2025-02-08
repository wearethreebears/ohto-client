import axios from "axios";
import auth, { type IApiAuth } from "./auth";
import admin, { type IApiAdmin } from "./admin";
import user, { type IApiUser } from "./user";
import brands, { type IApiBrands } from "./brands";
import discounts, { type IApiDiscounts } from "./discounts";
import chargeTypes, { type IApiChargeTypes } from "./charge-types";
import checkout from "./checkout";
import eligibleUserGroups, {
  type IApiEligibleUserGroups,
} from "./eligible-user-groups";
import products, { type IApiProducts } from "./products";
import productFilters, { type IApiProductFilters } from "./product-filters";
import orders, { type IApiOrders } from "./orders";
import files, { type IApiFiles } from "./files";
import staff, { type IApiStaff } from "./staff";
import sanctum, { type IApiSanctum } from "./sanctum";
import hasFullAccount, { type IApiHasFullAccount } from "./has-full-account";
import productCollections, {
  type IApiProductCollections,
} from "./product-collections";
import delivery, { type IApiDelivery } from "./delivery";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

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
  productFilters(): IApiProductFilters;
  productCollections(): IApiProductCollections;
  sanctum(): IApiSanctum;
  staff(): IApiStaff;
  files(): IApiFiles;
  orders(): IApiOrders;
  checkout(): any;
  hasFullAccount(): IApiHasFullAccount;
  user(): IApiUser;
  delivery(): IApiDelivery;
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
    productFilters,
    productCollections,
    sanctum,
    staff,
    user,
    files,
    checkout,
    orders,
    hasFullAccount,
    delivery,
  };
}
