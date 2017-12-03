import React from 'react';
import classnames from 'classnames';

import styles from './index.scss';

export default props => {
  const { className } = props;

  return (
  <span className={classnames(className, styles.label)} {...props} />
  );
}
