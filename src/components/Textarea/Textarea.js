/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Input } from '../Input';
import { scale } from '../../utils';
import { gray_light } from '../../styles';

class Textarea extends Component {
  render() {
    const {
      style,
      height,
      rounded,
      borderColor,
      ...rest
    } = this.props;

    return (
      <Input
        {...rest}
        transparent
        style={[
          styles.textarea,
          { height: scale(height), borderRadius: scale(rounded) },
          borderColor && { borderColor },
          style,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  textarea: {
    textAlignVertical: 'top',
    borderColor: gray_light,
    borderWidth: 1,
    paddingHorizontal: scale(8),
  }
});

Textarea.defaultProps = {
  height: 100,
  rounded: 0,
}

Textarea.propTypes = {
  height: PropTypes.number,
  rounded: PropTypes.number,
  borderColor: PropTypes.string,
}


export default Textarea;