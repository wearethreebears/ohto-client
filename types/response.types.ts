export interface IResponseErrors {
  [key: string]: string[];
}
export interface IResource {
  id: number;
}

export type TCollection = IResource[];

interface IPaginationLink {
  active: boolean;
  label: string;
  url: string | null;
}

export interface IPagination {
  currentPage: number;
  from: number;
  lastPage: number;
  links: IPaginationLink[];
  path: string;
  perPage: number;
  to: number;
  total: number;
}
