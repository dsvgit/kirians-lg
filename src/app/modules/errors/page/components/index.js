import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BaseLayout, Label } from 'src/app/components/index';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {
  fetchError,
  reset
} from '../actions';

import styles from './index.scss';

const DescriptionList = props => {
  const {
    items, title
  } = props;

  if (!items.length) return null;

  return [
    <List>
      <Subheader>{title}</Subheader>
      {_.map(items, item => <ListItem disabled
                                       leftAvatar={<div className={styles.errorIcon} />} >
        <div className={styles.text}
             dangerouslySetInnerHTML={{__html: String(item).replace(/\n/g, '<br>')}} />
      </ListItem>
      )}
    </List>,
    <Divider />
  ]
}

class Module extends Component {
  componentWillMount() {
    const { fetchError, match } = this.props;
    const { errorId, categoryId } = match.params;

    fetchError({ errorId, categoryId });
  }

  componentWillUnmount() {
    const { reset } = this.props;

    reset();
  }

  render() {
    const { source: { error } }  = this.props;
    const { error_code, title, data } = error;

    const mapColumn = (data, f) => _.filter(_.map(data, f), Boolean);

    let codes = mapColumn(data, chunk => chunk.error_code).join(', ');
    let controlPoint = mapColumn(data, chunk => chunk.control_point);
    let descriptions = mapColumn(data, chunk => chunk.description);
    let faults = mapColumn(data, chunk => chunk.faults);
    let causes = mapColumn(data, chunk => chunk.cause);

    return (
    <BaseLayout>
      <h2>Ошибка {error_code}</h2>

      <div>
        <span className={styles.description}>{title}</span>
      </div>
      <div>
        <Label>{codes}</Label>
      </div>

      <DescriptionList title="Причины" items={causes} />
      <DescriptionList title="Тип ошибки" items={faults} />
      <DescriptionList title="Источник ошибки" items={descriptions} />
      <DescriptionList title="Контрольные точки" items={controlPoint} />

    </BaseLayout>
    );
  }
}

const ModuleContainer = connect(
state => {
  const moduleState = state.errors.page;

  const {
    source,
    requests
  } = moduleState;

  const props = {
    source,
    requests
  };
  return props;
},
dispatch => bindActionCreators({
  fetchError,
  reset
}, dispatch),
)(Module);

export default ModuleContainer;
