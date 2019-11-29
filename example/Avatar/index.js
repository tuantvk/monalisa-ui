/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import { Layout, Row } from '../screen';
import {
  Avatar,
  AvatarGroup,
} from '../../src/components/Avatar';

const groups = [
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
  { source: { uri: 'https://picsum.photos/id/434/200/200' } },
];

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Row title="Avatar square">
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
      />
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        width={80}
        height={80}
      />
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        width={120}
        height={120}
      />
    </Row>
    <Row title="Avatar circle">
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        circle
      />
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        width={80}
        height={80}
        circle
      />
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        width={120}
        height={120}
        circle
      />
    </Row>
    <Row title="Avatar rounded">
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        rounded
      />
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        width={80}
        height={80}
        rounded
      />
      <Avatar
        source={{ uri: 'https://picsum.photos/id/434/200/200' }}
        width={120}
        height={120}
        rounded
      />
    </Row>
    <Row title="Avatar group stack">
      <AvatarGroup
        data={groups}
      />
    </Row>
    <Row title="Avatar group grid">
      <AvatarGroup
        data={[...groups, ...groups]}
        appearance="grid"
      />
    </Row>
    <Row title="Avatar max count">
      <AvatarGroup
        data={[...groups, ...groups]}
        appearance="grid"
        maxCount={7}
      />
    </Row>
  </Layout>
);