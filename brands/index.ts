import invoke from "../invoke";
import type { TProductRequestWith } from "../types/products/index.types";
import type {
  IRequest,
  TFilters,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import type {
  IBrandFilters,
  IBrandResource,
  TBrandCollection,
} from "../types/products/brands.types";

export interface IApiBrands {
  all(
    data?: TRequestData<object, TProductRequestWith, TFilters<IBrandFilters>>
  ): TResponseData<TBrandCollection>;
  show(slug: string): TResponseData<IBrandResource>;
}

export default function brands(): IApiBrands {
  const all = (
    data?: TRequestData<object, TProductRequestWith, TFilters<IBrandFilters>>
  ): TResponseData<TBrandCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/brands",
    };

    return invoke(request, data);
  };

  const show = (slug: string): TResponseData<IBrandResource> => {
    const request: IRequest = {
      method: "get",
      path: `/brands/${slug}`,
    };

    return invoke(request, undefined);
  };

  return {
    all,
    show,
  };
}
