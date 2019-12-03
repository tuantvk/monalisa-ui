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
import { blue } from '../../styles';
import { scale } from '../../utils';

class Segment extends Component {
  render() {
    const {
      borderColor,
      children,
    } = this.props;

    return (
      <View style={[styles.segment, borderColor]}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            style: styles.segmentItem,
          })
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segment: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: scale(6),
    alignSelf: 'center',
  },
  segmentItem: {
    paddingVertical: scale(2),
    paddingHorizontal: scale(20),
    backgroundColor: blue,
  }
});

Segment.defaultProps = {
  borderColor: blue,
}

Segment.propTypes = {

}


export default Segment;