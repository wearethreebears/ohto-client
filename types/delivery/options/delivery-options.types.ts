import { IResource } from "../../response.types";
import { TDeliveryOptionGroupCollection } from "./groups/option-group.types";
import { IDeliveryProviderResource } from "./providers/delivery-providers.types";

export enum EDeliveryOptionApplicationType {
  PER_BASKET = "PER_BASKET",
  PER_PRODUCT = "PER_PRODUCT",
  PER_ITEM = "PER_ITEM",
}

export interface IDeliveryOptionResource extends IResource {
  title: string;
  description: string;
  applicationType: EDeliveryOptionApplicationType;
  price: number;
  provider: IDeliveryProviderResource;
  options?: TDeliveryOptionGroupCollection;
}

export type TDeliveryOptionCollection = IDeliveryOptionResource[];
