import { ETruthy } from "../../types/utils/booleans";

export const toggleStringBoolean = (currentBoolean: ETruthy): ETruthy => {
  return currentBoolean === ETruthy.TRUE ? ETruthy.FALSE : ETruthy.TRUE;
};
