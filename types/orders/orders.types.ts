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
  billingDetails?: IBillingAddressResource;
  shippingDetails?: IShippingAddressResource;
  isBillingDetailsEqualToShippingDetails: boolean;
  orderLines?: TOrderLineCollection;
  orderChannel?: IOrderChannelResource;
  subtotal: number;
  total: number;
  discount: number;
  creditUsed: number;
  createdAt: string;
  user?: IUserResource;
}

export interface IEditOrderRequest {}

export type TOrderCollection = IOrderResource[];

interface IStoreOrderRequestVariants {
  id: number;
  quantity: number;
}

export enum OrderChannel {
  ONLINE_STORE = 1,
  POINT_OF_SALE = 2,
}

export interface IStoreOrderRequest {
  channel: OrderChannel;
  variants: IStoreOrderRequestVariants[];
}
