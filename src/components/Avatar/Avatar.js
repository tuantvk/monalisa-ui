import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { gray_light } from '../../styles';

export default ({
  circle,
  rounded,
  style,
  isVisible = true,
  width = 50,
  height = 50,
  ...rest
}) => {

  // format style avatar
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
      <Text>+12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  visible: {
    backgroundColor: gray_light,
    alignItems: 'center',
    justifyContent: 'center',
  }
});