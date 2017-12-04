import React from 'react';
import classnames from 'classnames';
import history from 'src/app/history';

import { BottomNavigation } from 'material-ui/BottomNavigation';
import BottomTab from './bottomTab';

import styles from './index.scss';

export default props => {
  const isActive = path => history.location.pathname.indexOf(path) != -1;

  return (
  <BottomNavigation selectedIndex={1} className={styles.tabs}>
    <BottomTab active={isActive('/error')} icon="errorIcon" href="/error" />
    <BottomTab active={isActive('/fridges')} icon="refrigerantIcon" href="/fridges" />
    <BottomTab active={isActive('/calculator')} icon="calculatorIcon" href="/calculator" />
    <BottomTab active={isActive('/support')} icon="supportIcon" href="/support" />
    <BottomTab active={isActive('/docs')} icon="docsIcon" href="/docs" />
  </BottomNavigation>
  );
}
