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
import history from 'src/app/history';

import styles from './index.scss';

class Module extends Component {
  render() {
    return (
    <BaseLayout paddingTop={false}>
      <Paper className={classnames(styles.section, styles.paper)}>
        <div className={styles.controlContainer}>
          <TextField floatingLabelText="Электронная почта" />
          <TextField floatingLabelText="Пароль" />
        </div>
        <div className={styles.controlContainer}>
          <RaisedButton primary
                        label="Войти" />
        </div>
        <div className={classnames(styles.controlContainer, styles.linkContainer)}>
          <Link onClick={() => history.push('/recovery')}>Забыли пароль?</Link>
        </div>
      </Paper>

      <div className={styles.section}>
        <div className={classnames(styles.controlContainer, styles.withoutAuthButton)}>
          <RaisedButton secondary
                        label="Продолжить без авторизации" />
        </div>

        <div className={classnames(styles.controlContainer, styles.withoutAuthButton)}>
          <Label>Некоторые разделы доступны только авторизированным пользователям,
            для получения доступа к ним пройдите регистрацию и авторизцию.</Label>
        </div>
      </div>
    </BaseLayout>
    );
  }
}

export default Module;
