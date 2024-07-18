import invoke, { EAPI } from "../invoke";
import type { TProductRequestWith } from "../types/products/index.types";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";

export interface IApiFiles {
  show(
    slug: string,
    data?: TRequestData<any, TProductRequestWith>
  ): TResponseData<Blob | MediaSource>;
}

export const PATH_DEFAULT_FILE = "/file";

export default function files(): IApiFiles {
  const show = (
    slug: string,
    data?: TRequestData<any, TProductRequestWith>
  ): TResponseData<Blob | MediaSource> => {
    const request: IRequest = {
      method: "image",
      path: `${PATH_DEFAULT_FILE}/${slug}`,
    };

    return invoke(request, data, EAPI.DEFAULT, { responseType: "blob" });
  };

  return {
    show,
  };
}
