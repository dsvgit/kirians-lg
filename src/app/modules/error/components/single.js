import React, { Component } from 'react';

import { BaseLayout } from 'src/app/components';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import styles from './index.scss';

class Module extends Component {
  render() {
    return (
    <BaseLayout>
      <h2>Ошибка 32</h2>

      <span className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>

      <List>
        <Subheader>Причина</Subheader>
        <ListItem primaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, commodi consequatur dolores facilis ipsam iste quae sequi suscipit? Architecto aut debitis enim harum iste maiores nemo nesciunt officiis perferendis praesentium quaerat quidem quis quod, rerum sunt suscipit vel vero vitae voluptates voluptatum? Consequatur dicta earum facilis ipsa minima quaerat similique vero! Aliquam consectetur, deleniti doloremque doloribus eligendi explicabo facilis id iste iusto maiores maxime necessitatibus nulla quas quos repudiandae, temporibus veritatis? Animi laboriosam laudantium magnam quidem voluptatum? Atque consectetur culpa eos iusto molestias, nulla provident reprehenderit tempora unde voluptate? Explicabo facere in labore natus quidem. Delectus ducimus exercitationem minima omnis. "
                  hoverColor="#fff"
                  disabled
                  leftAvatar={<div className={styles.errorIcon} />} />
      </List>
      <Divider />
      <List>
        <Subheader>Контрольные точки</Subheader>
        <ListItem primaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, commodi consequatur dolores facilis ipsam iste quae sequi suscipit? Architecto aut debitis enim harum iste maiores nemo nesciunt officiis perferendis praesentium quaerat quidem quis quod, rerum sunt suscipit vel vero vitae voluptates voluptatum? Consequatur dicta earum facilis ipsa minima quaerat similique vero! Aliquam consectetur, deleniti doloremque doloribus eligendi explicabo facilis id iste iusto maiores maxime necessitatibus nulla quas quos repudiandae, temporibus veritatis? Animi laboriosam laudantium magnam quidem voluptatum? Atque consectetur culpa eos iusto molestias, nulla provident reprehenderit tempora unde voluptate? Explicabo facere in labore natus quidem. Delectus ducimus exercitationem minima omnis. "
                  hoverColor="#fff"
                  disabled
                  leftAvatar={<div className={styles.errorIcon} />} />
        <ListItem primaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, commodi consequatur dolores facilis ipsam iste quae sequi suscipit? Architecto aut debitis enim harum iste maiores nemo nesciunt officiis perferendis praesentium quaerat quidem quis quod, rerum sunt suscipit vel vero vitae voluptates voluptatum? Consequatur dicta earum facilis ipsa minima quaerat similique vero! Aliquam consectetur, deleniti doloremque doloribus eligendi explicabo facilis id iste iusto maiores maxime necessitatibus nulla quas quos repudiandae, temporibus veritatis? Animi laboriosam laudantium magnam quidem voluptatum? Atque consectetur culpa eos iusto molestias, nulla provident reprehenderit tempora unde voluptate? Explicabo facere in labore natus quidem. Delectus ducimus exercitationem minima omnis. "
                  hoverColor="#fff"
                  disabled
                  leftAvatar={<div className={styles.errorIcon} />} />
        <ListItem primaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, commodi consequatur dolores facilis ipsam iste quae sequi suscipit? Architecto aut debitis enim harum iste maiores nemo nesciunt officiis perferendis praesentium quaerat quidem quis quod, rerum sunt suscipit vel vero vitae voluptates voluptatum? Consequatur dicta earum facilis ipsa minima quaerat similique vero! Aliquam consectetur, deleniti doloremque doloribus eligendi explicabo facilis id iste iusto maiores maxime necessitatibus nulla quas quos repudiandae, temporibus veritatis? Animi laboriosam laudantium magnam quidem voluptatum? Atque consectetur culpa eos iusto molestias, nulla provident reprehenderit tempora unde voluptate? Explicabo facere in labore natus quidem. Delectus ducimus exercitationem minima omnis. "
                  hoverColor="#fff"
                  disabled
                  leftAvatar={<div className={styles.errorIcon} />} />
      </List>

    </BaseLayout>
    );
  }
}

export default Module;
