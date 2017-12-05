import _ from 'lodash';
import { combineReducers } from 'redux';

import requestsFactory from 'src/app/framework/factories/requestsFactory';
import extendReducer from 'src/app/framework/extendReducer';
import types, { PREFIX } from '../constants/types';

const defaultState = {
  source: {
    categories: []
  },
  form: {
    code: '',
    category: null
  }
};

function fetchCategoriesSucceed(state, action) {
  const { payload } = action;

  if (payload == null) return state;

  return {
    ...state,
    source: {
      ...state.source,
      categories: payload
    },
    form: {
      ...state.form,
      category: _.get(payload, '0.id')
    }
  }
}

function changeField(state, action) {
  const { name, value } = action.payload;

  return {
    ...state,
    form: {
      ...state.form,
      [name]: value,
    },
  };
}

function reset(state, action) {
  return defaultState;
}

const reducer = (state = defaultState, action) => {
  const handler = {
    [types.FETCH_CATEGORIES_SUCCEED]: fetchCategoriesSucceed,
    [types.CHANGE_FIELD]: changeField,
    [types.RESET]: reset
  }[action.type];

  if (!handler) return state;

  return handler(state, action);
};

export default extendReducer(reducer, {
  requests: combineReducers({
    fetchCategories: requestsFactory.makeReducer(PREFIX, 'FETCH_CATEGORIES', types.RESET)
  })
});
