/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { blue } from '../../styles';

class Divider extends Component {
  render() {
    const {
      bgColor,
      style,
      ...rest
    } = this.props;

    return (
      <View
        style={[
          {
            backgroundColor: bgColor,
            height: StyleSheet.hairlineWidth,
          },
          style,
        ]}
        {...rest}
      />
    );
  }
}

Divider.defaultProps = {
  bgColor: blue,
}

Divider.propTypes = {
  bgColor: PropTypes.string,
}


export default Divider;