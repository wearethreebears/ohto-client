import invoke from "../invoke";
import type { TProductRequestWith } from "../types/products/index.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import { TBrandCollection } from "../types/products/brands.types";

export interface IApiBrands {
  all(
    data?: TRequestData<object, TProductRequestWith>
  ): TResponseData<TBrandCollection>;
}

export default function brands(): IApiBrands {
  const all = (
    data?: TRequestData<object, TProductRequestWith>
  ): TResponseData<TBrandCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/brands",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
