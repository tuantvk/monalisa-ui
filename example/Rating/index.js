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
import { Rating } from '../../src/components/Rating';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic rating" />
    <Rating />
    <Title name="Rating custom" />
    <Rating
      defaultRating={1}
    />
    <Rating
      defaultRating={4}
      ratingBackgroundColor="#ff0000"
    />
    <Title name="Rating not show title" />
    <Rating
      showTitle={false}
      defaultRating={4}
    />
  </Layout>
);