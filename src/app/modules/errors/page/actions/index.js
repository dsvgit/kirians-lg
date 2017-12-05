import types from '../constants/types';
import { PREFIX } from '../constants/types';
import requestsFactory from 'src/app/framework/factories/requestsFactory';

export function reset() {
  return {
    type: types.RESET
  };
}

export const fetchError = requestsFactory.makeActions(PREFIX, 'FETCH_ERROR');
