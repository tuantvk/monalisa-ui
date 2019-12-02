/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  blue,
  white,
} from '../../styles';
import { scale } from '../../utils';

class Spinner extends Component {
  render() {
    const {
      bgColor,
      title,
      style,
      titleStyle,
      spinnerStyle,
      ...rest
    } = this.props;

    return (
      <View style={[{ backgroundColor: bgColor }, styles.spinner, style]}>
        <ActivityIndicator style={spinnerStyle} {...rest} />
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(10),
  },
  title: {
    marginLeft: scale(8),
  }
});

Spinner.defaultProps = {
  color: blue,
  bgColor: white,
}

Spinner.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.string,
}


export default Spinner;