import invoke from "../invoke";

import type {
  IRequest,
  TFilters,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import type {
  IProductFilterFilters,
  IProductFilterResource,
  TProductFilterRequestWith,
} from "../types/product-filters/index.types";

export interface IApiProductFilters {
  all(
    data?: TRequestData<
      object,
      TProductFilterRequestWith,
      TFilters<IProductFilterFilters>
    >
  ): TResponseData<IProductFilterResource>;
}

export default function productFilters(): IApiProductFilters {
  const all = (
    data?: TRequestData<
      object,
      TProductFilterRequestWith,
      TFilters<IProductFilterFilters>
    >
  ): TResponseData<IProductFilterResource> => {
    const request: IRequest = {
      method: "get",
      path: "/product-filters",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
