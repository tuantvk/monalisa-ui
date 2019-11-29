import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { gray_light } from '../../styles';
import { scale } from '../../utils';

class Card extends Component {
  render() {
    const {
      style,
      bordered,
      rounded,
      children,
    } = this.props;

    return (
      <View style={[
        bordered && styles.bordered,
        rounded && styles.rounded,
        style,
      ]}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bordered: {
    borderColor: gray_light,
    borderWidth: 1,
  },
  rounded: {
    borderRadius: scale(8),
  },
});

Card.propTypes = {
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
}

export default Card;