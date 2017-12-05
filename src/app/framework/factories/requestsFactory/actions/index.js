import { makeTypes } from '../constants/index';
import { postfixes } from '../constants/index';

export function makeActions(prefix, type) {
  const types = makeTypes(prefix, type);

  const REQUESTED = `${type}${postfixes.REQUESTED}`;
  const SUCCEED = `${type}${postfixes.SUCCEED}`;
  const FAILED = `${type}${postfixes.FAILED}`;

  const action = payload => {
    return {
      type: types[type],
      payload
    }
  };

  action.requested = payload => {
    return {
      type: types[REQUESTED],
      payload
    }
  };

  action.succeed = payload => {
    return {
      type: types[SUCCEED],
      payload
    }
  };

  action.failed = payload => {
    return {
      type: types[FAILED],
      payload
    }
  };

  return action;
}
