import React from 'react';

import Paper from '../../../components/paper';
import TextField from 'material-ui/TextField';
import BaseLayout from '../../../components/baseLayout';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Label from '../../../components/label';
import RaisedButton from 'material-ui/RaisedButton';

import history from '../../../history';

import styles from './index.scss';

export default props => {
  return (
  <BaseLayout>
    <h2>Поиск ошибки</h2>

    <Paper zDepth={1}>
      <div>
        <Label>Поиск ошибки</Label>
      </div>
      <TextField />
    </Paper>

    <Paper zDepth={1}>
      <div>
        <Label>Введите категорию обородования</Label>
      </div>
      <SelectField floatingLabelText=""
                   value={1} >
        <MenuItem value={1} primaryText="Бытовые кондиционеры" />
        <MenuItem value={2} primaryText="Полупромышленные кондиционеры" />
        <MenuItem value={3} primaryText="Мульти сплит-системы" />
        <MenuItem value={4} primaryText="Мультизональные системы" />
      </SelectField>
    </Paper>

    <div className={styles.buttonsContainer}>
      <div className={styles.buttonContainer}>
        <RaisedButton label="Найти"
                      primary={true}
                      onClick={() => history.push('/error/12')} />
      </div>
      <div className={styles.buttonContainer}>
        <RaisedButton label="Сбросить"
                      secondary={true} />
      </div>
    </div>

  </BaseLayout>
  );
}
