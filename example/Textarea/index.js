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
import { Textarea } from '../../src/components/Textarea';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic textarea" />
    <Textarea
      placeholder="Input value"
    />
    <Title name="Height textarea" />
    <Textarea
      placeholder="Input value"
      height={150}
    />
    <Title name="Textarea with border radius" />
    <Textarea
      placeholder="Input value"
      rounded={18}
    />
    <Title name="Textarea with border color" />
    <Textarea
      placeholder="Input value"
      borderColor="#ff0000"
    />
  </Layout>
);