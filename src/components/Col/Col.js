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
    } = this.props;

    return (
      <View style={[
        { flexDirection: content },
        style,
      ]}>
        {children}
      </View>
    );
  }
}

Col.defaultProps = {
  content: 'column',
}

Col.propTypes = {
  content: PropTypes.string,
}

export default Col;
