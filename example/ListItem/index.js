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
import { ListItem } from '../../src/components/ListItem';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic ListItem" />
    <ListItem
      title="Matteo Kilback"
      subTitle="United States of America"
    />
    <ListItem
      title="Lauriane Dibbert"
      subTitle="United States of America"
    />
    <Title name="ListItem avatar" />
    <ListItem
      title="Jordy Ratke"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg' }}
    />
    <ListItem
      title="Elvie Lakin"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/128.jpg' }}
    />
    <ListItem
      title="Alda Dicki"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg' }}
      right={<Icon name="right" size={24} />}
    />
    <Title name="ListItem icon" />
    <ListItem
      title="Filomena Casper"
      subTitle="United States of America"
      left={<Icon name="picture" size={24} />}
      right={<Icon name="staro" size={24} />}
    />
    <ListItem
      title="Antonio Kuvalis"
      subTitle="United States of America"
      left={<Icon name="shoppingcart" size={24} />}
      right={<Icon name="staro" size={24} />}
    />
    <Title name="ListItem no border" />
    <ListItem
      title="Jordy Ratke"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg' }}
      border={false}
    />
    <ListItem
      title="Elvie Lakin"
      subTitle="United States of America"
      avatar={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/128.jpg' }}
      border={false}
    />
  </Layout>
);