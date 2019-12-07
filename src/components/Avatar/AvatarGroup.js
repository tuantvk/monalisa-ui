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
import Avatar from './Avatar';
import {
  scale,
  subNumber,
} from '../../utils';
import PropTypes from 'prop-types';

class AvatarGroup extends Component {

  _avatarItem = (index, appearance, d) => (
    <Avatar
      circle
      key={index}
      {...d}
      style={[
        appearance === 'stack' && { left: scale(index * -12) },
        appearance === 'grid' && {
          marginHorizontal: scale(3),
          marginBottom: scale(5),
        },
      ]}
    />
  );

  render() {
    const {
      data,
      appearance,
      maxCount,
      ...rest
    } = this.props;

    return (
      <View style={styles.stack}>
        {
          data.map((d, index) => {
            if (maxCount && maxCount !== 0) {
              if (index < maxCount) {
                return this._avatarItem(index, appearance, d);
              }
              if (index === maxCount) {
                return (
                  <Avatar
                    {...rest}
                    key={index}
                    isVisible={false}
                    value={`+${subNumber(data.length, maxCount)}`}
                    style={appearance === 'stack' && { left: scale(index * -12) }}
                  />
                );
              }
              return null;
            }
            return this._avatarItem(index, appearance, d);
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

AvatarGroup.propTypes = {
  data: PropTypes.array.isRequired,
  appearance: PropTypes.oneOf(['stack', 'grid']),
  maxCount: PropTypes.number,
}

AvatarGroup.defaultProps = {
  data: [],
  appearance: 'stack',
  maxCount: 0,
}

export default AvatarGroup;