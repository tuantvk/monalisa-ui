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
import { Text, StyleSheet } from 'react-native';
import { Divider } from '../../src/components/Divider';

const styles = StyleSheet.create({
  text: {
    marginVertical: 15,
  }
});

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic Divider" />
    <Text style={styles.text}>Lorem Ipsum is simply dummy text</Text>
    <Divider />
    <Text style={styles.text}>Lorem Ipsum is simply dummy text</Text>
    <Divider bgColor="#ff0000" />
    <Text style={styles.text}>Lorem Ipsum is simply dummy text</Text>
    <Divider style={{ backgroundColor: '#000', height: 10 }} />
  </Layout>
);