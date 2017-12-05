import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import types from '../constants/types';
import * as api from '../api';
import {
  fetchCategories,
  reset
} from '../actions';

function fetchCategoriesEpic(action$, store) {
  return action$.ofType(types.FETCH_CATEGORIES)
  .map(({ payload }) => { return fetchCategories.requested(payload); });
}

function fetchCategoriesRequestedEpic(action$, store) {
  return action$.ofType(types.FETCH_CATEGORIES_REQUESTED)
  .mergeMap(({ payload }) => {
    return Observable.fromPromise(api.fetchCategories())
    .map(payload => { return fetchCategories.succeed(payload); })
    .catch(response => { return Observable.of(fetchCategories.failed(response)); })
  })
}

export default combineEpics(
fetchCategoriesEpic,
fetchCategoriesRequestedEpic,
);
