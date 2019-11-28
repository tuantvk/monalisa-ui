import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Avatar from './Avatar';
import {
  scale,
  TYPELAST,
} from '../../utils';

export default ({
  data = [],

  // stack || grid
  appearance = 'stack',

  maxCount,
}) => (
    <View style={styles.stack}>
      {
        [...data, TYPELAST].map((d, index) => {
          if (d === TYPELAST) {
            return (
              <Avatar
                isVisible={false}
                style={appearance === 'stack' && { left: scale(index * -12) }}
              />
            );
          }
          return (
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
          )
        })
      }
    </View>
  );

const styles = StyleSheet.create({
  stack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});