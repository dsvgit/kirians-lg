import React, { Component } from 'react';

import BaseLayout from '../../../components/baseLayout';
import Slider from '../../../components/slider';

export default class extends Component {
  constructor(props) {
    super(props);
    this.svgContainer = null;
  }

  componentDidMount() {
  }
      
  render () {
    return (
    <BaseLayout>

      <h2>Подбор хладогента</h2>

      <Slider containerRef={(r) => {this.svgContainer = r;}} />

    </BaseLayout>
    );
  }
}
