export interface IStoreImageRequest {
  file: File;
  title: string;
  slug: string;
  alt?: string;
  type: "IMAGE";
}

export type TImageRequestWith = [];
