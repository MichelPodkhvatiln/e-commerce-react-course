import {all, call, put, takeLatest} from 'redux-saga/effects'

import UserActionsTypes from "../user/user.actions.types";
import {clearCart} from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
  ]);
}
