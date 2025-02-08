import { IResource } from "../../../response.types";
import { TDeliveryOptionCollection } from "../delivery-options.types";

export interface IDeliveryProviderResource extends IResource {
  title: string;
  options: TDeliveryOptionCollection;
}

export type TDeliveryProviderCollection = IDeliveryProviderResource[];
