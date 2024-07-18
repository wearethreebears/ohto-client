import invoke from "../../invoke";
import type {
  TRequestData,
  TResponseData,
  IRequest,
} from "../../types/invoke.types";
import type {
  IProductAttributeTypeRequesTRequestData,
  TProductAttributeTypeRequestWith,
  TProductAttributeTypesCollection,
} from "../../types/products/attribute-types.types";

export interface IApiProductAttributeTypes {
  all(
    data?: TRequestData<
      IProductAttributeTypeRequesTRequestData,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<TProductAttributeTypesCollection>;
}

export default function attributeTypes(): IApiProductAttributeTypes {
  const all = (
    data?: TRequestData<
      IProductAttributeTypeRequesTRequestData,
      TProductAttributeTypeRequestWith
    >
  ): TResponseData<TProductAttributeTypesCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/product-attribute-types",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
