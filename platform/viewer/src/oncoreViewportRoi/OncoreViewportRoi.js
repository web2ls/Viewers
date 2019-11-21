import React, { Component } from 'react';

class OncoreViewportRoi extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    console.log(this.props);
  }
}

export default OncoreViewportRoi;