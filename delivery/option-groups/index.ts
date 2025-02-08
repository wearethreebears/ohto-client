import determinedOptionGroups, {
  type IApiDeliveryDeterminedOptionGroups,
} from "./determined-option-groups";

export interface IApiDeliveryOptionGroups {
  determinedOptionGroups(): IApiDeliveryDeterminedOptionGroups;
}

export default function optionGroups() {
  return {
    determinedOptionGroups,
  };
}
