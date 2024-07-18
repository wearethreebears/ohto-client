export type TUpdate<T> = T & {
  id: number;
};

export type TTrash<T extends object = {}> = T & {
  id: number;
  softDelete?: boolean;
};
