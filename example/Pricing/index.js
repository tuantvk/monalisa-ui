/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  Layout,
  Title,
} from '../screen';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Pricing } from '../../src/components/Pricing';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic pricing" />
    <View style={styles.row}>
      <Pricing
        titleColor="#3e50fa"
        title="Free"
        price="$0"
        info={['1 CPU', '1024MB Memory', '1000GB Bandwidth']}
        button={{ title: 'GET STARTED' }}
      />
      <Pricing
        titleColor="#ff0000"
        title="Premium"
        price="$25"
        info={['2 CPU', '2048MB Memory', '2000GB Bandwidth']}
        button={{ title: 'GET STARTED' }}
      />
    </View>
  </Layout>
);