/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { gray_light } from '../../styles';

class Input extends Component {
  render() {
    const {
      leftIcon,
      rightIcon,
      transparent,
      style,
      error,
      errorStyle,
      label,
      labelStyle,
      ...rest
    } = this.props;

    return (
      <View>
        <Text style={labelStyle}>{label}</Text>
        <View style={[
          styles.content,
          !transparent && styles.borderBottom
        ]}>
          {leftIcon}
          <TextInput
            {...rest}
            style={[
              styles.input,
              style,
            ]}
          />
          {rightIcon}
        </View>
        {error && <Text style={errorStyle}>{error}</Text>}
      </View>
    );
  }
}

Input.defaultProps = {

}

Input.propTypes = {
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  transparent: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    alignSelf: 'center',
  },
  borderBottom: {
    borderBottomColor: gray_light,
    borderBottomWidth: 1,
  }
});


export default Input;