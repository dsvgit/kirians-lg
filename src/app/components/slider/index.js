import React, { Component } from 'react';

import styles from './index.scss';

export default class extends Component {
  componentDidMount() {
    const { containerRef } = this.props;
    containerRef && containerRef(document.getElementById('svg'));
  }

  render() {
    return (
    <div className={styles.outer}>
      <div id="svg" className={styles.wrapper}>

      </div>
    </div>
    );
  }
}
