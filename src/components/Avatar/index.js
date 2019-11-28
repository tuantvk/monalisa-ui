import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

export default ({
  type,
  style,
  width = 50,
  height = 50,
  ...rest
}) => (
    <Image
      {...rest}
      style={[
        style,
        {
          width,
          height,
        }
      ]}
    />
  );

const styles = StyleSheet.create({

});