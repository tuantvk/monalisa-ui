/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  gray_light,
  black,
} from '../../styles';
import { scale } from '../../utils';

class Tag extends Component {
  render() {
    const {
      text,
      style,
      color,
      bgColor,
      iconLeft,
      iconRight,
      size,
      ...rest
    } = this.props;

    return (
      <TouchableOpacity activeOpacity={.95} {...rest}>
        <View style={[
          {
            backgroundColor: bgColor || gray_light,
            paddingHorizontal: scale(size),
            borderRadius: scale(size / 2),
          },
          styles.row,
          style,
        ]}>
          {iconLeft}
          <Text style={[
            { color: color || black },
            styles.text,
          ]}>{text}</Text>
          {iconRight}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: scale(4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

Tag.defaultProps = {
  size: 6,
}

Tag.propTypes = {
  size: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  size: PropTypes.number,
}


export default Tag;
