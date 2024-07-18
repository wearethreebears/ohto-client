import invoke, { EAPI } from "../../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../../types/invoke.types";

import type {
  IStoreImageRequest,
  TImageRequestWith,
} from "../../../types/assets/images.types";
import { IAssetResource } from "../../../types/assets/assets.types";

export interface IApiStaffAssetsImages {
  store(
    data?: TRequestData<IStoreImageRequest, TImageRequestWith>
  ): TResponseData<IAssetResource>;
}

export default function assets(): IApiStaffAssetsImages {
  const store = (
    data?: TRequestData<IStoreImageRequest, TImageRequestWith>
  ) => {
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
