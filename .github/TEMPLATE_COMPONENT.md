/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class ExampleComponent extends Component {
  render() {
    return (
      <View>
        <Text> ExampleComponent </Text>
      </View>
    );
  }
}

ExampleComponent.defaultProps = {

}

ExampleComponent.propTypes = {

}


export default ExampleComponent;