/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Text } from '../Text';
import PropTypes from 'prop-types';
import {
  black,
  gray,
  gray_light,
} from '../../styles';
import { scale } from '../../utils';
import { Button } from '../Button';
import { withStyle } from '../../theme';

class Pricing extends Component {
  render() {
    const {
      title,
      titleColor,
      price,
      priceColor,
      info,
      titleStyle,
      priceStyle,
      borderColor,
      style,
      button,
    } = this.props;

    return (
      <View style={[styles.pricing, { borderColor, borderWidth: 1 }, style]}>
        <Text style={[styles.title, { color: titleColor }, titleStyle]}>{title}</Text>
        <Text style={[styles.price, { color: priceColor }, priceStyle]}>{price}</Text>
        {
          info.map((value, index) => (
            <Text key={index} style={{ color: gray }}>{value}</Text>
          ))
        }
        <Button buttonStyle={styles.button} {...button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pricing: {
    alignItems: 'center',
    padding: scale(15),
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: scale(8),
  },
  button: {
    marginTop: scale(15),
  }
});

Pricing.defaultProps = {
  info: [],
  titleColor: black,
  borderColor: gray_light,
}

Pricing.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  price: PropTypes.string,
  priceColor: PropTypes.string,
  info: PropTypes.array,
  borderColor: PropTypes.string,
  button: PropTypes.object,
}


export default withStyle(Pricing);