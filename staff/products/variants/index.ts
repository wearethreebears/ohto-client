export interface IStoreVariantRequest {
  uniqueId: string;
  attributes: number[];
  price: number;
  stock: number;
  billingModelId: number | null;
  billingPeriodId: number | null;
}
