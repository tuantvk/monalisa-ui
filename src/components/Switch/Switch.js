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
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  blue,
  white,
  gray_light,
} from '../../styles';
import {
  scale,
  wScale,
} from '../../utils';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchVal: props.value,
      slide: new Animated.Value(0),
    }
  }

  _start = index => {
    Animated.timing(this.state.slide, {
      toValue: index,
      duration: 250,
      useNativeDriver: true
    }).start();
  }

  _changeSwitch = () => {
    this.setState(prev => ({
      switchVal: !prev.switchVal,
    }), () => {
      this._start(Number(this.state.switchVal));
      this.props.onChange
        && this.props.onChange(this.state.switchVal);
    })
  }

  render() {
    const {
      switchVal,
      slide,
    } = this.state;
    const {
      style,
      height,
      bgColor,
      thumbColor,
      circleStyle,
    } = this.props;

    const pd = scale(height / 8);

    return (
      <TouchableOpacity activeOpacity={1} onPress={this._changeSwitch}>
        <View style={[
          styles.switch,
          {
            backgroundColor: switchVal ? bgColor : gray_light,
            height: wScale(height),
            borderRadius: wScale(height / 2),
            width: wScale(height * 2),
            padding: pd,
          },
          style,
        ]}>
          <Animated.View style={[
            {
              height: wScale(height - 6),
              width: wScale(height - 6),
              borderRadius: wScale(height / 2),
              backgroundColor: thumbColor,
              position: 'absolute',
              transform: [
                {
                  translateX: slide.interpolate({
                    inputRange: [0, 1],
                    outputRange: [6, wScale(height)]
                  })
                }
              ],
            },
            circleStyle,
          ]} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  switch: {
    justifyContent: 'center',
  }
});

Switch.defaultProps = {
  bgColor: blue,
  thumbColor: white,
  height: 18,
}

Switch.propTypes = {
  height: PropTypes.number,
  bgColor: PropTypes.string,
  thumbColor: PropTypes.string,
  onChange: PropTypes.func,
}


export default Switch;