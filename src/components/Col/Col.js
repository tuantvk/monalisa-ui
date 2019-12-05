/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

class Col extends Component {
  render() {
    const {
      style,
      content,
      children,
      alignItems,
    } = this.props;

    return (
      <View style={[
        {
          flexDirection: content,
          alignItems,
        },
        style,
      ]}>
        {children}
      </View>
    );
  }
}

Col.defaultProps = {
  content: 'column',
  alignItems: 'stretch',
}

Col.propTypes = {
  content: PropTypes.oneOf([
    'column', 'column-reverse',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center', 'stretch', 'baseline',
  ]),
}

export default Col;
