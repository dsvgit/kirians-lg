import React from 'react';
import classnames from 'classnames';
import history from 'src/app/history';

import { BottomNavigationItem } from 'material-ui/BottomNavigation';

import styles from './index.scss';

export default props => {
  const { icon, active, href } = props;

  const iconStyle = classnames(styles[icon], active && styles.active);

  return (
  <BottomNavigationItem className={classnames(styles.tab, active && styles.active)}
                        onClick={() => history.push(href) }
                        icon={<div className={iconStyle} />} />
  );
}
