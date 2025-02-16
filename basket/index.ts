import lines, { type IApiBasketLines } from "./lines";

export interface IApiBasket {
  lines(): IApiBasketLines;
}

export default function basket(): IApiBasket {
  return {
    lines,
  };
}
