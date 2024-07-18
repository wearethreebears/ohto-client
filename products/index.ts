import invoke from "../invoke";
import attributes, { IApiProductAttributes } from "./attributes";
import attributeTypes, {
  type IApiProductAttributeTypes,
} from "./attribute-types";
import variants, { IApiProductVariants } from "./variants";
import type {
  TProductCollection,
  TProductRequestWith,
} from "../types/products/index.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

export interface IApiProducts {
  all(
    data?: TRequestData<object, TProductRequestWith>
  ): TResponseData<TProductCollection>;
  attributes(): IApiProductAttributes;
  attributeTypes(): IApiProductAttributeTypes;
  variants(): IApiProductVariants;
}

export default function products(): IApiProducts {
  const all = (
    data?: TRequestData<object, TProductRequestWith>
  ): TResponseData<TProductCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/products",
    };

    return invoke(request, data);
  };

  return {
    all,
    attributes,
    attributeTypes,
    variants,
  };
}
