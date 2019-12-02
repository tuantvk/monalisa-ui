/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  Layout,
  Row,
} from '../screen';
import { SocialIcon } from '../../src/components/SocialIcon';

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Row title="Basic SocialIcon">
      <SocialIcon
        type="facebook"
      />
      <SocialIcon
        type="twitter"
      />
      <SocialIcon
        type="instagram"
      />
      <SocialIcon
        type="youtube"
      />
    </Row>
    <Row title="SocialIcon raised">
      <SocialIcon
        type="facebook"
        raised
      />
      <SocialIcon
        type="twitter"
        raised
      />
      <SocialIcon
        type="instagram"
        raised
      />
      <SocialIcon
        type="youtube"
        raised
      />
    </Row>
    <Row title="SocialIcon light">
      <SocialIcon
        type="facebook"
        light
      />
      <SocialIcon
        type="twitter"
        light
      />
      <SocialIcon
        type="instagram"
        light
      />
      <SocialIcon
        type="youtube"
        light
      />
    </Row>
  </Layout>
);