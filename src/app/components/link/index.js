import React from 'react';
import classnames from 'classnames';

import styles from './index.scss';

export default props => {
  const { className } = props;

  return (
  <span {...props} className={classnames(className, styles.link)} />
  );
}
