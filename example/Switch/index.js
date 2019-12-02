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
import { Switch } from '../../src/components/Switch';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic Switch" />
    <Switch />
    <Title name="Switch customize" />
    <Switch style={{ marginVertical: 30 }} height={30} />
    <Switch style={{ marginVertical: 30 }} bgColor="#ff0000" thumbColor="#53c641" />
    <Switch style={{ marginVertical: 30 }} onChange={() => alert("Change value")} />
  </Layout>
);