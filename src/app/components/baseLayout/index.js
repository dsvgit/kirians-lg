import React from 'react';
import classnames from 'classnames';

import styles from './index.scss';

export default props => {
  const { children, paddingTop = true } = props;

  return (
    <div className={classnames(styles.layout, paddingTop && styles.paddingTop)}>{children}</div>
  );
}
