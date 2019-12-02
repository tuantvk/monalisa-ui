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
import { Spinner } from '../../src/components/Spinner';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Spiner basic" />
    <Spinner />
    <Spinner title="Loading..." />
    <Spinner bgColor="#ff0000" color="#fff" />
    <Spinner size="large" color="#0000ff" />
    <Spinner style={{ marginVertical: 20 }} />
    <Spinner titleStyle={{ fontSize: 16 }} title="Loading..." />
  </Layout>
);