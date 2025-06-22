import type { IResource } from "../response.types";
import type { IOrderChannelResource } from "./order-channels.types";
import type { TOrderLineCollection } from "./order-lines.types";
import type {
  IBillingAddressResource,
  IShippingAddressResource,
} from "../auth/user/address.types";
import type { IUserResource } from "../auth/user/user.types";
import { TFilterSort } from "../invoke.types";

type TOrderFilterOrderBy = "id";

export interface IOrderFilters {
  orderBy?: TOrderFilterOrderBy;
  sort?: TFilterSort;
}

export type TOrderRequestWith = (
  | "user"
  | "lines"
  | "orderLines.variant"
  | "orderLines.productVariant.product"
  | "orderLines.productVariant.product.mediaFiles"
  | "orderLines.productVariant.attributes"
  | "orderChannel"
  | "billingDetail"
  | "shippingDetail"
)[];

export enum EOrderStatus {
  PROCESSING = "PROCESSING",
  DISPATCHED = "DISPATCHED",
  CANCELLED = "CANCELLED",
  REFUNDED = "REFUNDED",
}

export interface IOrderResource extends IResource {
  billingDetails?: IBillingAddressResource;
  shippingDetails?: IShippingAddressResource;
  isBillingDetailsEqualToShippingDetails: boolean;
  orderLines?: TOrderLineCollection;
  orderChannel?: IOrderChannelResource;
  subtotal: number;
  deliverySubtotal: number;
  total: number;
  discount: number;
  deliveryDiscount: number;
  creditUsed: number;
  createdAt: string;
  user?: IUserResource;
  status: EOrderStatus;
}

export interface IGuestOrderResource extends IOrderResource {
  token: string;
}

export const isGuestOrderResource = (
  orderResource: IOrderResource | IGuestOrderResource
): orderResource is IGuestOrderResource => {
  return !!(orderResource as IGuestOrderResource).token;
};

export interface IEditOrderRequest {}

export interface IShowOrderRequest {}

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
  deliveryOption?: number;
}
