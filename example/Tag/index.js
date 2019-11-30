/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  Layout,
  Title,
  Row,
} from '../screen';
import { Tag } from '../../src/components/Tag';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Tags" />
    <Row>
      <Tag text="Base tag" />
    </Row>
    <Row>
      <Tag text="Tag color" color="#ff0000" />
    </Row>
    <Row>
      <Tag text="Tag color and background color" color="#fff" bgColor="#000" />
    </Row>
    <Row>
      <Tag text="Tag icon left" iconLeft={<Icon name="github" />} />
    </Row>
    <Row>
      <Tag text="Tag icon right" iconRight={<Icon name="close" />} />
    </Row>
    <Row>
      <Tag text="Tag button" activeOpacity={1} onPress={() => alert("Hello from Tag")} />
    </Row>
  </Layout>
);