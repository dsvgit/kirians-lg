import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import types from '../constants/types';
import * as api from '../api';
import {
  fetchError,
  reset
} from '../actions';

function fetchErrorEpic(action$, store) {
  return action$.ofType(types.FETCH_ERROR)
  .map(({ payload }) => { return fetchError.requested(payload); });
}

function fetchErrorRequestedEpic(action$, store) {
  return action$.ofType(types.FETCH_ERROR_REQUESTED)
  .mergeMap(({ payload }) => {
    return Observable.fromPromise(api.fetchError(payload))
    .map(payload => { return fetchError.succeed(payload); })
    .catch(response => { return Observable.of(fetchError.failed(response)); })
  })
}

export default combineEpics(
fetchErrorEpic,
fetchErrorRequestedEpic,
);
