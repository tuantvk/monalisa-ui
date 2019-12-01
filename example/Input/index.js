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
import { Input } from '../../src/components/Input';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic input" />
    <Input
      placeholder="Input value"
    />
    <Input
      label="Username"
      placeholder="Input label"
    />
    <Input
      transparent
      placeholder="Input transparent"
    />
    <Title name="Input error" />
    <Input
      placeholder="Input value"
      error="Missing value"
      errorStyle={{ color: '#ff0000', fontSize: 11 }}
    />
    <Title name="Input icon" />
    <Input
      placeholder="Input left icon"
      leftIcon={<Icon size={22} name="mail" />}
    />
    <Input
      placeholder="Input right icon"
      rightIcon={<Icon size={22} name="close" />}
    />
  </Layout>
);