/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import { Text } from '../Text';
import PropTypes from 'prop-types';
import {
  blue,
  white,
  black,
} from '../../styles';
import {
  scale,
  checkProp,
} from '../../utils';
import { withStyle } from '../../theme';

class Button extends Component {
  render() {
    const {
      title,
      activeOpacity,
      borderRadius,
      bgColor,
      titleColor,
      buttonStyle,
      titleStyle,
      loading,
      loadingColor,
      disabled,
      transparent,
      outline,
      outlineWidth,
      raised,
      iconLeft,
      iconRight,
      ...rest
    } = this.props;

    return (
      <TouchableOpacity style={styles.row} disabled={disabled} {...rest} activeOpacity={activeOpacity}>
        <View style={[
          styles.container,
          styles.row,
          {
            borderRadius,
            backgroundColor: outline ? white : transparent ? 'transparent' : bgColor
          },
          outline && {
            borderColor: checkProp(outline) ? blue : outline,
            borderWidth: outlineWidth
          },
          raised && styles.raised,
          buttonStyle,
        ]}>
          {!loading && <View style={styles.iconLeft}>
            {iconLeft}
          </View>
          }
          {
            loading ?
              <ActivityIndicator
                color={
                  bgColor === loadingColor && !outline
                    ? (transparent ? loadingColor : white)
                    : loadingColor
                }
              />
              :
              <Text style={[
                { color: checkProp(outline) ? blue : (transparent ? black : titleColor) },
                titleStyle,
              ]}>{title}</Text>
          }
          {!loading && <View style={styles.iconRight}>
            {iconRight}
          </View>
          }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  iconLeft: {
    marginRight: scale(6),
  },
  iconRight: {
    marginLeft: scale(6),
  }
});

Button.defaultProps = {
  borderRadius: 3,
  activeOpacity: 0.9,
  bgColor: blue,
  titleColor: white,
  outlineWidth: 1,
  loadingColor: blue,
}

Button.propTypes = {
  title: PropTypes.string,
  activeOpacity: PropTypes.number,
  borderRadius: PropTypes.number,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  loading: PropTypes.bool,
  loadingColor: PropTypes.string,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  outline: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  outlineWidth: PropTypes.number,
  raised: PropTypes.bool,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
}


export default withStyle(Button);