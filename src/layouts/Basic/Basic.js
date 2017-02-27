import React, { Component } from 'react';
import Header from '../../components/Header';

class Basic extends Component {
  render() {
    const {
      props: {
        children,
      },
    } = this;

    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default Basic;
