/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { Layout } from '../screen';
import {
  Card,
  CardImage,
} from '../../src/components/Card';

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 25,
  },
  contentStyle: {
    padding: 20,
  },
});

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Card style={styles.card}>
      <Text>This is content card</Text>
    </Card>
    <Card style={styles.card} bordered>
      <Text>This is content card bordered</Text>
    </Card>
    <Card style={styles.card} bordered rounded>
      <Text>This is content card bordered and rounded</Text>
    </Card>
    <CardImage
      bordered
      contentStyle={styles.contentStyle}
      height={150}
      source={{ uri: 'http://lorempixel.com/640/480/city/' }}
    >
      <Text>This is content card image</Text>
    </CardImage>
  </Layout>
);