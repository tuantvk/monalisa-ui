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
import PropTypes from 'prop-types';
import Button from './Button';
import { scale } from '../../utils';

class ButtonGroup extends Component {
  render() {
    const {
      buttons,
      onPress,
      buttonStyle,
      style,
      ...rest
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        {
          buttons.map((button, index) => (
            button.component ?
              <TouchableOpacity
                key={index}
                onPress={() => onPress(index)}
                style={[styles.btnItem, buttonStyle]}
                {...rest}
              >
                <button.component />
              </TouchableOpacity>
              :
              <Button
                buttonStyle={[styles.btnItem, buttonStyle]}
                key={index}
                onPress={() => onPress(index)}
                title={button}
                {...rest}
              />
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btnItem: {
    marginHorizontal: scale(5),
  }
});

ButtonGroup.defaultProps = {
  onPress: () => { },
}

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
}


export default ButtonGroup;