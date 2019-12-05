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
import {
  gray_light,
} from '../../styles';
import { scale } from '../../utils';

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
          {leftIcon && React.cloneElement(leftIcon,
            { style: styles.icon }
          )}
          <TextInput
            {...rest}
            style={[
              styles.input,
              leftIcon && styles.inputLeftIcon,
              rightIcon && styles.inputRightIcon,
              style,
            ]}
          />
          {rightIcon && React.cloneElement(rightIcon,
            { style: [styles.icon, styles.rightIcon] }
          )}
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
  },
  icon: {
    position: 'absolute',
  },
  rightIcon: {
    right: 0,
  },
  inputLeftIcon: {
    marginLeft: scale(25),
  },
  inputRightIcon: {
    paddingRight: scale(22),
  }
});


export default Input;