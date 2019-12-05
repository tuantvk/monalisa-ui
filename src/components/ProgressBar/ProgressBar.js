/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { scale } from '../../utils';
import {
  blue,
  white,
} from '../../styles';

class ProgressBar extends Component {
  render() {
    const {
      height,
      borderColor,
      bgColor,
      borderRadius,
      borderWidth,
      value,
      style,
      children,
    } = this.props;

    let radius = borderRadius || height / 2;

    return (
      <View style={[
        styles.progressBar,
        {
          borderColor,
          borderWidth,
          borderRadius: scale(radius),
          height: scale(height),
        },
        style,
      ]}>
        <View style={[
          {
            backgroundColor: bgColor,
            width: `${value}%`,
            flex: 1,
            borderRadius: scale(radius),
          },
          styles.content,
        ]}>
          {children && React.cloneElement(children,
            { style: { fontSize: height - 3, color: white } }
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

ProgressBar.defaultProps = {
  height: 12,
  borderColor: blue,
  borderRadius: null,
  borderWidth: 1,
  bgColor: blue,
  value: 0,
}

ProgressBar.propTypes = {
  height: PropTypes.number,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderRadius: PropTypes.any,
  borderWidth: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}


export default ProgressBar;