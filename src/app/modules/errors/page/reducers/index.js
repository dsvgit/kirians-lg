import { combineReducers } from 'redux';

import requestsFactory from 'src/app/framework/factories/requestsFactory';
import extendReducer from 'src/app/framework/extendReducer';
import types, { PREFIX } from '../constants/types';

const defaultState = {
  source: {
    error: {}
  }
};

function fetchErrorSucceed(state, action) {
  const { payload } = action;

  if (payload == null) return state;

  return {
    ...state,
    source: {
      ...state.source,
      error: payload
    }
  }
}

function reset(state, action) {
  return defaultState;
}

const reducer = (state = defaultState, action) => {
  const handler = {
    [types.FETCH_ERROR_SUCCEED]: fetchErrorSucceed,
    [types.RESET]: reset
  }[action.type];

  if (!handler) return state;

  return handler(state, action);
};

export default extendReducer(reducer, {
  requests: combineReducers({
    fetchError: requestsFactory.makeReducer(PREFIX, 'FETCH_ERROR', types.RESET)
  })
});
