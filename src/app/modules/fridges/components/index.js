import React, { Component } from 'react';

import BaseLayout from 'src/app/components/baseLayout';
import Slider from 'src/app/components/slider';

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
