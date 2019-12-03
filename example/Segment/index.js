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
  Text,
} from 'react-native';
import { Segment } from '../../src/components/Segment';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic segment" />
    <Segment>
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Segment>
    <Title name="Segment custom" />
    <Segment
      colorActive="#fff"
      bgColorActive="#ff0000"
      colorUnactive="#fe6845"
      onChange={index => alert(index)}
    >
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Segment>
    <Segment style={{ marginTop: 30 }}>
      <Text>One</Text>
      <Text>Two</Text>
    </Segment>
  </Layout>
);