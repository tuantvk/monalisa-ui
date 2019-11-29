/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Card from './Card';

class CardImage extends Component {
  render() {
    const {
      source,
      height,
      children,
      imageStyle,
      contentStyle,
      ...rest
    } = this.props;

    return (
      <Card {...rest}>
        <Image
          source={source}
          style={[
            styles.image,
            { height },
            imageStyle,
          ]}
        />
        <View style={contentStyle}>
          {children}
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  }
});

CardImage.defaultProps = {
  height: 150,
}

export default CardImage;