/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  gray,
  gray_light,
} from '../../styles';
import { scale } from '../../utils';
import { Avatar } from '../Avatar';

class ListItem extends Component {
  render() {
    const {
      title,
      subTitle,
      left,
      right,
      titleStyle,
      subTitleStyle,
      style,
      avatar,
      avatarStyle,
      border,
    } = this.props;

    return (
      <View style={[
        border && styles.border,
        styles.row,
        style
      ]}>
        <View style={styles.left}>
          {
            left &&
            <View style={styles.avatar}>
              {left}
            </View>
          }
          {
            avatar &&
            <Avatar
              source={avatar}
              width={40}
              height={40}
              circle
              style={[styles.avatar, avatarStyle]}
            />
          }
          <View>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
          </View>
        </View>
        {right}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(8),
  },
  border: {
    borderBottomColor: gray_light,
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 12,
    color: gray,
  },
  avatar: {
    marginRight: scale(10),
  }
});

ListItem.defaultProps = {
  border: true,
}

ListItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  left: PropTypes.element,
  right: PropTypes.element,
  border: PropTypes.bool,
}


export default ListItem;