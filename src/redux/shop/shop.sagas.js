import { takeLatest, put, call } from 'redux-saga/effects';
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

export function* fetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
