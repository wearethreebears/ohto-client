import invoke, { EAPI } from "../../../invoke";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../../types/invoke.types";

import type {
  IFileResource,
  IStoreFileRequest,
  TFileRequestWith,
} from "../../../types/folders/files.types";

export interface IApiStaffFoldersFiles {
  store(
    data?: TRequestData<IStoreFileRequest, TFileRequestWith>
  ): TResponseData<IFileResource>;
}

export default function files(): IApiStaffFoldersFiles {
  const store = (
    data?: TRequestData<IStoreFileRequest, TFileRequestWith>
  ): TResponseData<IFileResource> => {
    const request: IRequest = {
      method: "post",
      path: "/files/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  return {
    store,
  };
}
