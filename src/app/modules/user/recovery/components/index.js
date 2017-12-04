import React, { Component } from 'react';
import classnames from 'classnames';

import {
  BaseLayout,
  Paper,
  Link,
  Label
} from 'src/app/components/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './index.scss';

class Module extends Component {
  render() {
    return (
    <BaseLayout>
      <Paper className={classnames(styles.section, styles.paper)}>
        <h3>Восстановить пароль</h3>
        <div className={styles.controlContainer}>
          <TextField floatingLabelText="Электронная почта" />
        </div>
        <div className={styles.controlContainer}>
          <RaisedButton primary
                        label="Восстановить" />
        </div>
      </Paper>
    </BaseLayout>
    );
  }
}

export default Module;
