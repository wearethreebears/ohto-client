import brands, { IApiStaffBrands } from "./brands";
import products, { IApiStaffProducts } from "./products";
import orders, { IApiStaffOrders } from "./orders";
import customers, { IApiStaffCustomers } from "./customers";
import discounts, { IApiStaffDiscounts } from "./discounts";
import segments, { IApiStaffSegments } from "./segments";
import folders, { IApiStaffFolders } from "./folders";
import assets, { IApiStaffAssets } from "./assets";
import billingModels, { IApiStaffBillingModels } from "./billing-models";
import billingPeriods, { IApiStaffBillingPeriods } from "./billing-periods";

export interface IApiStaff {
  brands(): IApiStaffBrands;
  products(): IApiStaffProducts;
  orders(): IApiStaffOrders;
  customers(): IApiStaffCustomers;
  segments(): IApiStaffSegments;
  discounts(): IApiStaffDiscounts;
  folders(): IApiStaffFolders;
  assets(): IApiStaffAssets;
  billingModels(): IApiStaffBillingModels;
  billingPeriods(): IApiStaffBillingPeriods;
}

export default function staff(): IApiStaff {
  return {
    brands,
    products,
    orders,
    customers,
    segments,
    discounts,
    folders,
    assets,
    billingModels,
    billingPeriods,
  };
}
