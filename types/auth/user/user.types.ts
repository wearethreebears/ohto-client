import type { TOrderCollection } from "../../orders/orders.types";
import type { IResource } from "../../response.types";
import type {
  TShippingAddressCollection,
  TBillingAddressCollection,
} from "./address.types";

export interface IUserRequestFilters {
  search?: string;
}

export type TUserRequestWith = (
  | "shippingAddresses"
  | "billingAddresses"
  | "orders"
)[];

export interface IEditUserRequest {}

export interface IUserResource extends IResource {
  firstName: string;
  lastName: string;
  email: string;
  orders?: TOrderCollection;
  shippingAddresses?: TShippingAddressCollection;
  billingAddresses?: TBillingAddressCollection;
  createdAt: string;
}

export type TUserCollection = IUserResource[];
