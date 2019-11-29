import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  blue,
  white,
} from '../../styles';

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

export default Badge;
