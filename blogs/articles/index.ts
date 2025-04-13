import invoke from "../../invoke";

import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../types/invoke.types";
import type {
  IArticleResource,
  TArticleCollection,
  TArticleRequestWith,
} from "../../types/blogs/articles.types.ts";

export interface IApiArticles {
  all(
    blogSlug: string,
    data?: TRequestData<object, TArticleRequestWith>
  ): TResponseData<TArticleCollection>;
  show(blogSlug: string, articleSlug: string): TResponseData<IArticleResource>;
}

export default function Articles(): IApiArticles {
  const all = (
    blogSlug: string,
    data?: TRequestData<object, TArticleRequestWith>
  ): TResponseData<TArticleCollection> => {
    const request: IRequest = {
      method: "get",
      path: `/blogs/${blogSlug}/articles`,
    };

    return invoke(request, data);
  };

  const show = (
    blogSlug: string,
    articleSlug: string
  ): TResponseData<IArticleResource> => {
    const request: IRequest = {
      method: "get",
      path: `/blog/${blogSlug}/articles/${articleSlug}`,
    };

    return invoke(request, undefined);
  };

  return {
    all,
    show,
  };
}
