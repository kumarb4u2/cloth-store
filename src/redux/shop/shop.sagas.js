import { call, put, takeLatest } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  fireStore,
} from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';
import { ShopActionTypes } from './shop.types';

export function* fetchCollectionAsync() {
  try {
    const colletionRef = fireStore.collection('collections');
    const snapshot = yield colletionRef.get();
    const colllectionMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(colllectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}
