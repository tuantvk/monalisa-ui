/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  Layout,
  Box,
  Title,
} from '../screen';
import { Row } from '../../src/components/Row';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="flex-start" />
    <Row>
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="space-between" />
    <Row content="space-between">
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="space-around" />
    <Row content="space-around">
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="flex-end" />
    <Row content="flex-end">
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="space-evenly" />
    <Row content="space-evenly">
      <Box />
      <Box />
      <Box />
    </Row>
  </Layout>
);