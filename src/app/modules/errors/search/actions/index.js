import types from '../constants/types';
import { PREFIX } from '../constants/types';
import requestsFactory from 'src/app/framework/factories/requestsFactory';

export function changeField(payload) {
  return {
    type: types.CHANGE_FIELD,
    payload,
  };
}

export function reset() {
  return {
    type: types.RESET
  };
}

export const fetchCategories = requestsFactory.makeActions(PREFIX, 'FETCH_CATEGORIES');
