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
import { ArticleCard } from '../../src/components/ArticleCard';

const image = 'http://lorempixel.com/640/480/nightlife/';
const datas = [
  {
    img: image,
    title: 'Et saepe in aut voluptates illum eum laudantium ipsam similique.',
    category: 'Aut voluptatem dicta',
    author: 'Dr. Ida Marvin',
    time: '21 min ago',
  },
  {
    img: image,
    title: 'Et saepe in aut voluptates illum eum laudantium ipsam similique.',
    category: 'Aut voluptatem dicta',
    author: 'Dr. Ida Marvin',
    time: '21 min ago',
  },
  {
    img: image,
    title: 'Et saepe in aut voluptates illum eum laudantium ipsam similique.',
    category: 'Aut voluptatem dicta',
    author: 'Dr. Ida Marvin',
    time: '21 min ago',
  },
];

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic ArticleCard" />
    {
      datas.map((data, index) => (
        <ArticleCard
          key={index}
          {...data}
          style={{ marginBottom: 15 }}
        />
      ))
    }
  </Layout>
);