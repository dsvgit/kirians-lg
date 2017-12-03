import React from 'react';

import styles from './index.scss';

export default props => {
  const { children } = props;

  return (
    <div className={styles.layout}>{children}</div>
  );
}
