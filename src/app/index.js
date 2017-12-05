import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import { BottomTabs } from 'src/app/components';

import ErrorsSearch from './modules/errors/search/components/index';
import ErrorsPage from './modules/errors/page/components/index';
import Fridges from './modules/fridges/components/index';
import Calculator from './modules/calculator/components/index';
import Support from './modules/support/components/index';
import Docs from './modules/docs/components/index';
import Profile from './modules/user/profile/components/index';
import Recovery from './modules/user/recovery/components/index';

import history from './history';
import store from './store';

import theme from './theme/index';
import styles from './index.scss';
import './theme/fonts.scss';

const mainModules = ['/error', '/fridges', '/calculator', '/support', '/docs'];
const titles = {
  '/error': 'Ошибки',
  '/fridges': 'Подбор хладогента',
  '/calculator': 'Калькулятор',
  '/support': 'Поддержка',
  '/docs': 'Документация',
  '/recovery': 'Восстановить пароль'
};

export default props => {

  const isActive = path => history.location.pathname.indexOf(path) != -1;

  return (
  <Provider store={store}>
    <Router history={history} initialEntries={['/error']} initialIndex={0}>
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div>
          {!isActive('profile')
          ? <AppBar title={titles[_.find(_.keys(titles), isActive)]}
                    className={styles.appBar}
                    showMenuIconButton={!_.some(mainModules, name => history.location.pathname == name)}
                    iconElementLeft={<IconButton
                    onClick={() => history.goBack()}><NavigationArrowBack/></IconButton>}
                    iconElementRight={<IconButton
                    onClick={() => history.push('/profile')}><ActionSettings/></IconButton>}/>
          : null
          }

          <Switch>
            <Route path="/error/:errorId/category/:categoryId" component={ErrorsPage}/>
            <Route path="/error" component={ErrorsSearch}/>
            <Route path="/fridges" component={Fridges}/>
            <Route path="/calculator" component={Calculator}/>
            <Route path="/support" component={Support}/>
            <Route path="/docs" component={Docs}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/recovery" component={Recovery}/>
            <Redirect from="/" to="/error" />
          </Switch>

          <BottomTabs />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
  );
}
