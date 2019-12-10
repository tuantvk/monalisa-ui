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
import { CheckBox } from '../../src/components/CheckBox';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic CheckBox" />
    <CheckBox />
    <CheckBox value={true} />
    <CheckBox label="This is CheckBox" />
    <CheckBox label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
    <Title name="CheckBox custom" />
    <CheckBox uncheckColor="#ff0000" activeOpacity={0.8} />
    <CheckBox checkColor="#ff0000" value={true} activeOpacity={0.8} />
    <Title name="CheckBox disabled" />
    <CheckBox disabled />
    <CheckBox disabled value={true} />
  </Layout>
);