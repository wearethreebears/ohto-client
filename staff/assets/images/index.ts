import invoke, { EAPI } from "../../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../../types/invoke.types";

import type {
  IImageResource,
  IStoreImageRequest,
  TImageRequestWith,
} from "../../../types/assets/images.types";

export interface IApiStaffAssetsImages {
  store(
    data?: TRequestData<IStoreImageRequest, TImageRequestWith>
  ): TResponseData<IImageResource>;
}

export default function assets(): IApiStaffAssetsImages {
  const store = (
    data?: TRequestData<IStoreImageRequest, TImageRequestWith>
  ): TResponseData<IImageResource> => {
    const request: IRequest = {
      method: "post",
      path: "/images/store",
    };

    return invoke(request, data, EAPI.STAFF, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return {
    store,
  };
}
