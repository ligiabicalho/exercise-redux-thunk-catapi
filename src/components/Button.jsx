import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionFetchAPI } from '../redux/actions';

class Button extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <button type="button" onClick={() => dispatch(actionFetchAPI())}>
        Find a cat!
      </button>
    );
  }
}

export default connect()(Button);
