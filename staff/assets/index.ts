import invoke, { EAPI } from "../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";

import images, { IApiStaffAssetsImages } from "./images";

import type {
  IAssetResource,
  IStoreAssetRequest,
  TAssetRequestWith,
} from "../../types/assets/assets.types";

export interface IApiStaffAssets {
  store(
    data?: TRequestData<IStoreAssetRequest, TAssetRequestWith>
  ): TResponseData<IAssetResource> | undefined;
  images(): IApiStaffAssetsImages;
}

export default function assets(): IApiStaffAssets {
  const store = (
    data?: TRequestData<IStoreAssetRequest, TAssetRequestWith>
  ): TResponseData<IAssetResource> | undefined => {
    // If type of file is image
    if (data?.meta.type.startsWith("image/")) {
      return images().store({
        file: data.meta,
        title: data.title,
        slug: data.slug,
        alt: data.alt,
        type: "IMAGE",
      });
    }
  };

  return {
    store,
    images,
  };
}
