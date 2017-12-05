import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';;
import RaisedButton from 'material-ui/RaisedButton';

import history from 'src/app/history';
import { Paper, BaseLayout, Label } from 'src/app/components/index';
import {
  changeField,
  fetchCategories
} from '../actions';

import styles from './index.scss';

class Module extends Component {
  componentWillMount() {
    const { requests, fetchCategories } = this.props;

    !requests.fetchCategories.loaded && fetchCategories();
  }

  render() {
    const {
      source: {
        categories
      },
      form: {
        code,
        category
      },
      changeField
    } = this.props;

    return (
    <BaseLayout>
      <h2>Поиск ошибки</h2>

      <Paper zDepth={1}>
        <div>
          <Label>Поиск ошибки</Label>
        </div>
        <TextField value={code}
                   onChange={(e, value) => changeField({ name: 'code', value })} />
      </Paper>

      <Paper zDepth={1}>
        <div>
          <Label>Введите категорию обородования</Label>
        </div>
        <SelectField floatingLabelText=""
                     value={category}
                     onChange={(e, i, value) => changeField({ name: 'category', value })} >
          {_.map(categories, category => <MenuItem value={category.id}
                                                   primaryText={category.name} />)}
        </SelectField>
      </Paper>

      <div className={styles.buttonsContainer}>
        <div className={styles.buttonContainer}>
          <RaisedButton label="Найти"
                        primary={true}
                        onClick={() => history.push(`/error/${code}/category/${category}`)} />
        </div>
        <div className={styles.buttonContainer}>
          <RaisedButton label="Сбросить"
                        secondary={true} />
        </div>
      </div>

    </BaseLayout>
    );
  }
}

const ModuleContainer = connect(
state => {
  const moduleState = state.errors.search;

  const {
    source,
    form,
    requests
  } = moduleState;

  const props = {
    source,
    form,
    requests
  };
  return props;
},
dispatch => bindActionCreators({
  changeField,
  fetchCategories
}, dispatch),
)(Module);

export default ModuleContainer;
