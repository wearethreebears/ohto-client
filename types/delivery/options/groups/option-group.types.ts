import { IResource } from "../../../response.types";
import { TDeliveryOptionCollection } from "../delivery-options.types";

export interface IDeliveryOptionGroupResource extends IResource {
  title: string;
  description: string;
  options: TDeliveryOptionCollection;
}

export type TDeliveryOptionGroupCollection = IDeliveryOptionGroupResource[];
