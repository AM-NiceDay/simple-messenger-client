import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';

class Messenger extends React.Component {
  render() {
    return <Component />;
  }
}

export default connect(null)(Messenger);
