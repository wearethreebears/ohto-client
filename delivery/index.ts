import optionGroups, { type IApiDeliveryOptionGroups } from "./option-groups";

export interface IApiDelivery {
  optionGroups(): IApiDeliveryOptionGroups;
}

export default function delivery() {
  return {
    optionGroups,
  };
}
