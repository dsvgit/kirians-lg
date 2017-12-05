import { makeTypes } from '../constants/index';
import { postfixes } from '../constants/index';

const defaultState = {
  pending: false,
  loaded: false,
  failed: false
};

function requested(state, action) {
  return {
    ...state,
    pending: true,
    failed: false
  }
}

function succeed(state, action) {
  return {
    ...state,
    pending: false,
    loaded: true,
    failed: false
  }
}

function failed(state, action) {
  return {
    ...state,
    pending: false,
    loaded: true,
    failed: true
  }
}

function reset(state, action) {
  return defaultState;
}

export function makeReducer(prefix, type, resetType) {
  const types = makeTypes(prefix, type);
  
  const REQUESTED = `${type}${postfixes.REQUESTED}`;
  const SUCCEED = `${type}${postfixes.SUCCEED}`;
  const FAILED = `${type}${postfixes.FAILED}`;

  const requestReducer = (state = defaultState, action) => {
    const handler = {
      [types[REQUESTED]]: requested,
      [types[SUCCEED]]: succeed,
      [types[FAILED]]: failed,
      [resetType]: reset
    }[action.type];

    if (!handler) return state;

    return handler(state, action)
  };

  return requestReducer;
};
