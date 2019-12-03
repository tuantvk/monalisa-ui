/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  blue,
  white,
} from '../../styles';
import { scale } from '../../utils';

class Segment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSegment: props.defaultValue,
    }
  }

  _onChange = isSegment => {
    this.setState({ isSegment });
    this.props.onChange && this.props.onChange(isSegment);
  }

  render() {
    const { isSegment } = this.state;
    const {
      activeOpacity,
      colorActive,
      bgColorActive,
      colorUnactive,
      style,
      children,
    } = this.props;

    return (
      <View style={[styles.segment, style, { borderColor: bgColorActive }]}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(
            <TouchableOpacity activeOpacity={activeOpacity} onPress={() => this._onChange(index)}>
              <View style={[
                styles.segmentItem,
                isSegment === index && { backgroundColor: bgColorActive },
                index === 0 && styles.firstItem,
                index === children.length - 1 && styles.endItem,
                index !== 0 && index !== children.length - 1 &&
                { ...styles.segmentCenter, borderRightColor: bgColorActive, borderLeftColor: bgColorActive },
              ]}>{React.cloneElement(child,
                { style: { color: isSegment === index ? colorActive : colorUnactive } }
              )}</View>
            </TouchableOpacity>,
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segment: {
    borderWidth: 0.8,
    flexDirection: 'row',
    borderRadius: scale(6),
    alignSelf: 'center',
  },
  segmentItem: {
    paddingVertical: scale(2),
    paddingHorizontal: scale(20),
  },
  firstItem: {
    borderTopLeftRadius: scale(4),
    borderBottomLeftRadius: scale(4),
  },
  endItem: {
    borderTopRightRadius: scale(4),
    borderBottomRightRadius: scale(4),
  },
  segmentCenter: {
    borderLeftWidth: 0.8,
    borderRightWidth: 0.8,
  }
});

Segment.defaultProps = {
  defaultValue: 0,
  activeOpacity: 1,
  bgColorActive: blue,
  colorActive: white,
  colorUnactive: blue,
}

Segment.propTypes = {
  activeOpacity: PropTypes.number,
  colorActive: PropTypes.string,
  bgColorActive: PropTypes.string,
  colorUnactive: PropTypes.string,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
}


export default Segment;