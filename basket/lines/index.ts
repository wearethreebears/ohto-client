import invoke from "../../invoke";
import type {
  IBasketLinesRequest,
  TBasketLineCollection,
} from "../../types/basket/lines";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";

export interface IApiBasketLines {
  all(
    data?: TRequestData<IBasketLinesRequest>
  ): TResponseData<TBasketLineCollection>;
}

export default function lines(): IApiBasketLines {
  const all = (
    data?: TRequestData<object>
  ): TResponseData<TBasketLineCollection> => {
    const request: IRequest = {
      method: "post",
      path: "/basket/lines",
    };

    return invoke(request, data);
  };

  return {
    all,
  };
}
