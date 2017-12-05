import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/app/reducer';
import epic from 'src/app/epic';

const epicMiddleware = createEpicMiddleware(epic);

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware),
  ),
);
