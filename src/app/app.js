import _ from 'lodash';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import { BottomTabs } from 'src/app/components';

import Error from './modules/error/components/index';
import ErrorSingle from './modules/error/components/single';
import Fridges from './modules/fridges/components/index';
import Calculator from './modules/calculator/components/index';
import Support from './modules/support/components/index';
import Docs from './modules/docs/components/index';
import Profile from './modules/profile/components/index';

import history from './history';

import theme from './theme/index';
import styles from './index.scss';
import './theme/fonts.scss';

const mainModules = ['/error', '/fridges', '/calculator', '/support', '/docs'];
const titles = {
  '/error': 'Ошибки',
  '/fridges': 'Подбор хладогента',
  '/calculator': 'Калькулятор',
  '/support': 'Поддержка',
  '/docs': 'Документация'
};

export default props => {

  const isActive = path => history.location.pathname.indexOf(path) != -1;

  return (
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
        <Route path="/error/:id" component={ErrorSingle}/>
        <Route path="/error" component={Error}/>
        <Route path="/fridges" component={Fridges}/>
        <Route path="/calculator" component={Calculator}/>
        <Route path="/support" component={Support}/>
        <Route path="/docs" component={Docs}/>
        <Route path="/profile" component={Profile}/>
        <Redirect from="/" to="/error" />
      </Switch>

      <BottomTabs />
    </div>
  </MuiThemeProvider>
  );
}
