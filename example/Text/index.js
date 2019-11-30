/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  Layout,
  Row,
} from '../screen';
import { Text } from '../../src/components/Text';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Row title="normal">
      <Text>This is Text normal</Text>
    </Row>
    <Row title="h1">
      <Text h1>This is Text h1</Text>
    </Row>
    <Row title="h2">
      <Text h2>This is Text h2</Text>
    </Row>
    <Row title="h3">
      <Text h3>This is Text h3</Text>
    </Row>
    <Row title="h4">
      <Text h4>This is Text h4</Text>
    </Row>
    <Row title="bold">
      <Text bold>This is Text bold</Text>
    </Row>
    <Row title="color">
      <Text color="#ff0000">This is Text color</Text>
    </Row>
  </Layout>
);