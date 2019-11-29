/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Layout, Row } from '../screen';
import {
  Badge,
} from '../../src/components/Badge';

const styles = StyleSheet.create({
  badge: {
    marginBottom: 10,
  },
  badgeCustom: {
    marginTop: 15,
    backgroundColor: '#ffa259',
    paddingHorizontal: 8,
    paddingVertical: 5,
  }
});

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Row title="Basic">
      <Badge value="12" style={styles.badge} />
      <Badge value="+2" style={styles.badge} />
      <Badge value="1234" style={styles.badge} />
    </Row>
    <Row title="Custom badge">
      <Badge value="4" bgColor="#ff0000" style={styles.badge} />
      <Badge value="56" style={styles.badgeCustom} />
    </Row>
  </Layout>
);