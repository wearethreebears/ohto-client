import invoke, { EAPI } from "../../invoke";
import files, { IApiStaffFoldersFiles } from "./files";
import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";

import type {
  IFolderRequestRequestData,
  IFolderResource,
  IStoreFolderRequest,
  TFolderCollection,
  TFolderRequestWith,
} from "../../types/folders/folders.types";

export interface IEditFolderRequest {}

export interface IApiStaffFolders {
  all(
    data?: TRequestData<IFolderRequestRequestData, TFolderRequestWith>
  ): TResponseData<TFolderCollection>;
  store(
    data?: TRequestData<IStoreFolderRequest, TFolderRequestWith>
  ): TResponseData<IFolderResource>;
  edit(
    slug: string,
    data?: TRequestData<IEditFolderRequest, TFolderRequestWith>
  ): TResponseData<IFolderResource>;
  root(
    data?: TRequestData<object, TFolderRequestWith>
  ): TResponseData<IFolderResource>;
  files(): IApiStaffFoldersFiles;
}

export default function folders(): IApiStaffFolders {
  const all = (
    data?: TRequestData<IFolderRequestRequestData, TFolderRequestWith>
  ) => {
    const request: IRequest = {
      method: "get",
      path: "/folders",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const edit = (
    slug: string,
    data?: TRequestData<IEditFolderRequest, TFolderRequestWith>
  ): TResponseData<IFolderResource> => {
    const request: IRequest = {
      method: "get",
      path: `/folders/edit/${slug}`,
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const store = (
    data?: TRequestData<IStoreFolderRequest, TFolderRequestWith>
  ) => {
    const request: IRequest = {
      method: "post",
      path: "/folders/store",
    };

    return invoke(request, data, EAPI.STAFF);
  };

  const root = (data?: TRequestData<object, TFolderRequestWith>) => {
    return edit("root", data);
  };

  return {
    edit,
    store,
    root,
    all,
    files,
  };
}
