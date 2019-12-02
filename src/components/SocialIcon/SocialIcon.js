/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  white,
} from '../../styles';
import {
  scale,
  checkTypeSocical,
} from '../../utils';

class SocialIcon extends Component {
  render() {
    const {
      type,
      raised,
      light,
      style,
      height,
    } = this.props;

    return (
      <View style={[
        {
          height: scale(height),
          width: scale(height),
          borderRadius: scale(height / 2),
          backgroundColor: checkTypeSocical(type),
        },
        light && { backgroundColor: white, ...styles.raised },
        raised && styles.raised,
        styles.socialIcon,
        style,
      ]}>
        <Icon color={light ? checkTypeSocical(type) : white} name={type} size={height / 2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  socialIcon: {
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
});

SocialIcon.defaultProps = {
  raised: false,
  height: 45,
}

SocialIcon.propTypes = {
  type: PropTypes.oneOf([
    'github',
    'facebook',
    'youtube',
    'instagram',
    'twitter',
    'pinterest',
    'linkedin',
    'vimeo',
  ]).isRequired,
  raised: PropTypes.bool,
  light: PropTypes.bool,
  height: PropTypes.number,
}


export default SocialIcon;