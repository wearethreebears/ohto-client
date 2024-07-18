import invoke from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type {
  IProductAttributesRequestRequestData,
  TProductAttributesCollection,
  TProductAttributesRequestWith,
} from "../../types/products/attributes.types";

export interface IApiProductAttributes {
  all(
    data?: TRequestData<
      IProductAttributesRequestRequestData,
      TProductAttributesRequestWith
    >
  ): TResponseData<TProductAttributesCollection>;
}

export default function attributes(): IApiProductAttributes {
  const all = (
    data?: TRequestData<
      IProductAttributesRequestRequestData,
      TProductAttributesRequestWith
    >
  ): TResponseData<TProductAttributesCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/product-attributes",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
