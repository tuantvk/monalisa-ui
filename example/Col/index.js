/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  Layout,
  Title,
  Box,
} from '../screen';
import { Col } from '../../src/components/Col';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="column" />
    <Col>
      <Box value="1" />
      <Box value="2" />
      <Box value="3" />
    </Col>
    <Title name="column-reverse" />
    <Col content="column-reverse">
      <Box value="1" />
      <Box value="2" />
      <Box value="3" />
    </Col>
  </Layout>
);