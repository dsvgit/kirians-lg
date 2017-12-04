import React from 'react';
import classnames from 'classnames';

import Paper from 'material-ui/Paper';

import styles from './index.scss';

export default props => {
  const { className } = props;

  return (
    <Paper {...props} className={classnames(className, styles.paper)} />
  );
}
