import type { IResource } from "../../response.types";

interface IBaseAddressResource extends IResource {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  buildingName?: string | null;
  buildingNumber?: string | null;
  line1: string;
  line2?: string | null;
  townOrCity: string;
  country: string;
  postcode: string;
}

export interface IShippingAddressResource extends IBaseAddressResource {}
export interface IBillingAddressResource extends IBaseAddressResource {}

export type TShippingAddressCollection = IShippingAddressResource[];
export type TBillingAddressCollection = IBillingAddressResource[];
