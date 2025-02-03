import invoke from "../invoke";

import type { IRequest, TResponseData } from "../types/invoke.types";
import { IProductFilterResource } from "../types/product-filters/index.types";

export interface IApiProductFilters {
  all(): TResponseData<IProductFilterResource>;
}

export default function productFilters(): IApiProductFilters {
  const all = (): TResponseData<IProductFilterResource> => {
    const request: IRequest = {
      method: "get",
      path: "/product-filters",
    };

    return invoke(request);
  };

  return {
    all,
  };
}
