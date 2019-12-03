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
import { Text } from 'react-native';
import { Segment } from '../../src/components/Segment';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Segment>
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
    </Segment>
  </Layout>
);