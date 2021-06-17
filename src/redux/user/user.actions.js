import { UserActionsTypes } from "./user.actions.types";

export const setCurrentUser = (user) => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user,
});
