import React from 'react';
import {
  Image,
} from 'react-native';

export default ({
  circle,
  rounded,
  style,
  width = 50,
  height = 50,
  ...rest
}) => (
    <Image
      {...rest}
      style={[
        { width, height },
        circle && { borderRadius: width / 2 },
        rounded && { borderRadius: width / 10 },
        style,
      ]}
    />
  );