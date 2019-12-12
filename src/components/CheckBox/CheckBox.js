/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Text } from '../Text';
import { scale } from '../../utils';
import PropTypes from 'prop-types';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    }
  }

  _onChange = () => {
    this.setState(prev => ({ value: !prev.value }), () => {
      this.props.onChange && this.props.onChange(this.state.value);
    });
  }

  render() {
    const { value } = this.state;
    const {
      disabled,
      checkColor,
      uncheckColor,
      style,
      activeOpacity,
      size,
      label,
      styleLabel,
      alignVerticalTop,
    } = this.props;

    return (
      <TouchableOpacity disabled={disabled} activeOpacity={activeOpacity} onPress={this._onChange}>
        <View style={[
          style,
          disabled && { opacity: 0.4 },
          styles.row,
          !alignVerticalTop && { alignItems: 'center', }
        ]}>
          {value ?
            <Icon color={checkColor} name="check-square" size={size} />
            :
            <Icon color={uncheckColor} name="square" size={size} />
          }
          <Text style={[styles.label, styleLabel]}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  label: {
    marginLeft: scale(5),
  }
});

CheckBox.defaultProps = {
  activeOpacity: 1,
  size: 24,
  alignVerticalTop: false,
}

CheckBox.propTypes = {
  disabled: PropTypes.bool,
  checkColor: PropTypes.string,
  uncheckColor: PropTypes.string,
  activeOpacity: PropTypes.number,
  size: PropTypes.number,
  label: PropTypes.string,
  alignVerticalTop: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.bool,
}


export default CheckBox;