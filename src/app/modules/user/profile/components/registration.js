import React, { Component } from 'react';
import classnames from 'classnames';

import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

import {
  BaseLayout,
  Paper,
  Link,
  Label
} from 'src/app/components/index';
import history from 'src/app/history';

import styles from './index.scss';

class Module extends Component {
  render() {
    return (
    <BaseLayout paddingTop={false}>
      <Paper className={classnames(styles.section, styles.paper)}>
        <h3>Личные данные</h3>
        <div className={styles.controlContainer}>
          <TextField floatingLabelText="Электронная почта" />
          <TextField floatingLabelText="Пароль" />
          <TextField floatingLabelText="Имя" />
          <TextField floatingLabelText="Фамилия" />
          <TextField floatingLabelText="Город" />
        </div>
      </Paper>

      <Paper className={classnames(styles.section, styles.paper)}>
        <h3>Профессиональные данные</h3>
        <div className={styles.controlContainer}>
          <Toggle label="Занимаюсь кондиционированием профессионально" />
          <TextField floatingLabelText="Организация" />
          <TextField floatingLabelText="Телефон" />
          <TextField floatingLabelText="Должность" />
        </div>
      </Paper>

      <Paper className={classnames(styles.section, styles.paper)}>
        <h3>Сфера деятельности</h3>
        <div className={styles.controlContainer}>
          <Checkbox label="Монтаж"
                    labelPosition="left" />
          <Checkbox label="Проектирование"
                    labelPosition="left" />
          <Checkbox label="Сервис"
                    labelPosition="left" />
          <Checkbox label="Продажи"
                    labelPosition="left" />
        </div>
      </Paper>

      <div className={styles.section}>
        <Toggle label="Согласен с политикой защиты персональных данных" />
        <Link onClick={() => {}}>Ознакомиться</Link>
      </div>

      <div className={styles.section}>
        <Toggle label="Согласен получать информационную рассылку о предстоящих акциях,
                            мероприятиях и новостях департамента кондиционирования LG" />
      </div>

      <div className={styles.section}>
        <div className={classnames(styles.controlContainer, styles.withoutAuthButton)}>
          <RaisedButton secondary
                        label="Зарегистрироваться" />
        </div>
      </div>
    </BaseLayout>
    );
  }
}

export default Module;
