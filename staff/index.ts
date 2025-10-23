import brands, { type IApiStaffBrands } from "./brands";
import products, { type IApiStaffProducts } from "./products";
import productCollections, {
  type IApiStaffProductCollections,
} from "./product-collections";
import orders, { type IApiStaffOrders } from "./orders";
import customers, { type IApiStaffCustomers } from "./customers";
import discounts, { type IApiStaffDiscounts } from "./discounts";
import segments, { type IApiStaffSegments } from "./segments";
import folders, { type IApiStaffFolders } from "./folders";
import assets, { type IApiStaffAssets } from "./assets";
import billingModels, { type IApiStaffBillingModels } from "./billing-models";
import billingPeriods, {
  type IApiStaffBillingPeriods,
} from "./billing-periods";
import productCategories, {
  IApiStaffProductCategories,
} from "./product-categories";

export interface IApiStaff {
  brands(): IApiStaffBrands;
  products(): IApiStaffProducts;
  productCollections(): IApiStaffProductCollections;
  productCategories(): IApiStaffProductCategories;
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
    productCategories,
    productCollections,
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
