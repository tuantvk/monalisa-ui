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
  StyleSheet,
  Text,
} from 'react-native';
import { ProgressBar } from '../../src/components/ProgressBar';

const styles = StyleSheet.create({
  bar: {
    marginBottom: 20,
  }
});

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic ProgressBar" />
    <ProgressBar style={styles.bar} value={100} />
    <ProgressBar style={styles.bar} value={30} />
    <Title name="ProgressBar custom" />
    <ProgressBar style={styles.bar} value={30} height={30} />
    <ProgressBar style={styles.bar} value={30} bgColor="#ff0000" borderColor="#ff0000" />
    <ProgressBar style={styles.bar} value={30} borderWidth={3} height={20} />
    <ProgressBar style={styles.bar} value={80}>
      <Text>80</Text>
    </ProgressBar>
  </Layout>
);