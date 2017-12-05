import { combineReducers } from 'redux';

import errorsSearch from 'src/app/modules/errors/search/reducers';
import errorsPage from 'src/app/modules/errors/page/reducers';

const reducer = combineReducers({
  errors: combineReducers({
    search: errorsSearch,
    page: errorsPage
  })
});

export default reducer;
