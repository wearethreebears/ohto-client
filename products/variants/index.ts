import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type {
  IProductVariantsRequesTRequestData,
  TProductVariantFromAttributesCollection,
  TProductVariantsRequestWith,
} from "../../types/products/variants.types";

export interface IApiProductVariants {
  create(
    data?: TRequestData<
      IProductVariantsRequesTRequestData,
      TProductVariantsRequestWith
    >
  ): TResponseData<TProductVariantFromAttributesCollection>;
}

export default function variants(): IApiProductVariants {
  const create = (
    data?: TRequestData<
      IProductVariantsRequesTRequestData,
      TProductVariantsRequestWith
    >
  ): TResponseData<TProductVariantFromAttributesCollection> => {
    const request: IRequest = {
      method: "post",
      path: "/product-variants/create",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    create,
  };
}
