import { combineEpics } from 'redux-observable';

import errorsSearch from 'src/app/modules/errors/search/epics';
import errorsPage from 'src/app/modules/errors/page/epics';

export default combineEpics(
errorsSearch,
errorsPage
);
