import type { IResource } from "../response.types";
import type { IOrderChannelResource } from "./order-channels.types";
import type { TOrderLineCollection } from "./order-lines.types";
import type {
  IBillingAddressResource,
  IShippingAddressResource,
} from "../auth/user/address.types";
import type { IUserResource } from "../auth/user/user.types";

export type TOrderRequestWith = (
  | "user"
  | "lines"
  | "orderLines.variant"
  | "orderLines.productVariant.product"
  | "orderLines.productVariant.attributes"
  | "orderChannel"
  | "billingDetail"
  | "shippingDetail"
)[];

export interface IOrderResource extends IResource {
  billingDetails: IBillingAddressResource;
  shippingDetails: IShippingAddressResource;
  isBillingDetailsEqualToShippingDetails: boolean;
  orderLines: TOrderLineCollection;
  orderChannel: IOrderChannelResource;
  subtotal: number;
  total: number;
  discount: number;
  creditUsed: number;
  createdAt: string;
  user: IUserResource;
}

export type TOrderCollection = IOrderResource[];
