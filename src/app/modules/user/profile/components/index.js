import React, { Component } from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import { BaseLayout } from 'src/app/components';
import Auth from './auth';
import Registration from './registration';

import colors from 'src/app/theme/colors';

class Module extends Component {
  render() {
    return (
    <div>
      <Tabs inkBarStyle={{ backgroundColor: colors.main, height: 4 }}>
        <Tab label="Авторизация" >
          <Auth />
        </Tab>
        <Tab label="Регистрация" >
          <Registration></Registration>
        </Tab>
      </Tabs>
    </div>
    );
  }
}

export default Module;
