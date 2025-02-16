import invoke from "../../../invoke";
import type { IShowDeliveryDeterminedOptionGroupRequest } from "../../../types/delivery/options/groups/determined-option-groups/determined-option-groups.types";
import type { IDeliveryOptionGroupResource } from "../../../types/delivery/options/groups/option-group.types";

import type {
  IRequest,
  TRequestData,
  TResponseData,
} from "../../../types/invoke.types";

export interface IApiDeliveryDeterminedOptionGroups {
  show(
    data?: TRequestData<IShowDeliveryDeterminedOptionGroupRequest>
  ): TResponseData<IDeliveryOptionGroupResource>;
}

export default function determinedOptionGroups(): IApiDeliveryDeterminedOptionGroups {
  const show = (
    data?: TRequestData<IShowDeliveryDeterminedOptionGroupRequest>
  ): TResponseData<IDeliveryOptionGroupResource> => {
    const request: IRequest = {
      method: "post",
      path: "/delivery/option-groups/determined-delivery-option-group",
    };

    return invoke(request, data);
  };

  return {
    show,
  };
}
