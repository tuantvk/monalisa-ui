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
import { scale } from '../../utils';
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
      iconRight,
      ...rest
    } = this.props;

    return (
      <View style={[
        styles.container,
        styles.row,
        {
          borderRadius,
          backgroundColor: outline ? white : transparent ? 'transparent' : bgColor
        },
        outline && {
          borderColor: String(outline) === 'true' ? blue : outline,
          borderWidth: outlineWidth
        },
        raised && styles.raised,
        buttonStyle,
      ]}>
        <TouchableOpacity style={styles.row} disabled={disabled} {...rest} activeOpacity={activeOpacity}>
          <View style={styles.icon}>
            {iconRight}
          </View>
          {
            loading ?
              <ActivityIndicator color={loadingColor} />
              :
              <Text style={[
                { color: String(outline) === 'true' ? blue : transparent ? black : titleColor },
                titleStyle,
              ]}>{title}</Text>
          }
        </TouchableOpacity>
      </View>
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
  icon: {
    marginRight: scale(6),
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
  iconRight: PropTypes.element,
}


export default withStyle(Button);