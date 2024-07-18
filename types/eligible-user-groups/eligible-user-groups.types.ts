import type { IResource } from "../response.types";

export type TEligibleUserGroupRequestWith = [];

export enum EEligibleUserGroup {
  EVERYONE = "EVERYONE",
  SPECIFIED_USERS = "SPECIFIED_USERS",
  SPECIFIED_SEGMENTS = "SPECIFIED_SEGMENTS",
  SPECIFIED_USERS_OR_SPECIFIED_SEGMENTS = "SPECIFIED_USERS_OR_SPECIFIED_SEGMENTS",
  SPECIFIED_USERS_IN_SPECIFIED_SEGMENTS = "SPECIFIED_USERS_IN_SPECIFIED_SEGMENTS",
}

export interface IEligibleUserGroupResource extends IResource {
  title: string;
  slug: EEligibleUserGroup;
}

export type TEligibleUserGroupCollection = IEligibleUserGroupResource[];
