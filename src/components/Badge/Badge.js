/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  blue,
  white,
} from '../../styles';
import PropTypes from 'prop-types';

class Badge extends Component {
  render() {
    const {
      color,
      bgColor,
      value,
      size,
      style,
    } = this.props;

    return (
      <View style={[
        {
          borderRadius: size / 2,
          backgroundColor: bgColor || blue,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start',
          paddingHorizontal: 4,
        },
        style,
      ]}>
        <Text style={{ color, fontSize: size - 14 }}>{value}</Text>
      </View>
    );
  }
}

Badge.defaultProps = {
  size: 24,
  color: white,
}

Badge.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  value: PropTypes.string,
}

export default Badge;
