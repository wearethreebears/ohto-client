import invoke from "../invoke";
import articles, { type IApiArticles } from "./articles";

import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../types/invoke.types";
import type {
  IBlogResource,
  TBlogCollection,
  TBlogRequestWith,
} from "../types/blogs/blogs.types";

export interface IApiBlogs {
  all(
    data?: TRequestData<object, TBlogRequestWith>
  ): TResponseData<TBlogCollection>;
  show(slug: string): TResponseData<IBlogResource>;
  articles(): IApiArticles;
}

export default function blogs(): IApiBlogs {
  const all = (
    data?: TRequestData<object, TBlogRequestWith>
  ): TResponseData<TBlogCollection> => {
    const request: IRequest = {
      method: "get",
      path: "/blogs",
    };

    return invoke(request, data);
  };

  const show = (slug: string): TResponseData<IBlogResource> => {
    const request: IRequest = {
      method: "get",
      path: `/blogs/${slug}`,
    };

    return invoke(request, undefined);
  };

  return {
    all,
    show,
    articles,
  };
}
