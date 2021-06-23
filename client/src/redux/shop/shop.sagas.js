import { takeLatest, put, call, all } from 'redux-saga/effects';
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop.actions.types";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";

export function* fetchCollectionAsync() {
  const collectionRef = firestore.collection('collections');

  try {
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
