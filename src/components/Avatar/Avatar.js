import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { gray_light } from '../../styles';
import PropTypes from 'prop-types';

class Avatar extends Component {
  render() {
    const {
      circle,
      rounded,
      style,
      isVisible,
      width,
      height,
      value,
      ...rest
    } = this.props;

    let customs = [
      { width, height },
      circle && { borderRadius: width / 2 },
      rounded && { borderRadius: width / 10 },
      isVisible ? {} : { ...styles.visible, borderRadius: width / 2 },
      style,
    ];

    if (isVisible) {
      return (
        <Image
          {...rest}
          style={customs}
        />
      );
    }
    return (
      <View style={customs}>
        <Text>{value}</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  visible: {
    backgroundColor: gray_light,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

Avatar.propTypes = {
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  isVisible: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  value: PropTypes.string,
}

Avatar.defaultProps = {
  isVisible: true,
  width: 50,
  height: 50,
  value: '',
}

export default Avatar;