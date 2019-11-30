/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Title,
} from '../screen';
import { Input } from '../../src/components/Input';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
  }
});

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic input" />
    <Input
      placeholder="Input value"
    />
    <Input
      transparent
      placeholder="Input transparent"
    />
    <Input
      label="Username"
      placeholder="Input label"
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