import React from 'react';
import { Layout, Row } from '../screen';
import Avatar from '../../src/components/Avatar';

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
  </Layout>
);