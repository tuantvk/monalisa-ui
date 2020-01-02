/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Layout,
  Title,
} from '../screen';

// Component
import { Text } from '../../src/components/Text';
import { Badge } from '../../src/components/Badge';
import { Button } from '../../src/components/Button';
import { Pricing } from '../../src/components/Pricing';
import { Rating } from '../../src/components/Rating';
import { Spinner } from '../../src/components/Spinner';
import { Tag } from '../../src/components/Tag';
import { Divider as MUDivider } from '../../src/components/Divider';

// Theme
import { StyleProvider } from '../../src/theme';

const Divider = () => <MUDivider style={{ marginVertical: 20 }} />


export default ({ navigation }) => {
  const [theme, changeTheme] = useState("light");

  return (
    <Layout navigation={navigation}>
      <ScrollView>
        <Button title={`${theme.toUpperCase()} THEME`} onPress={() => changeTheme(prev => prev === 'light' ? 'dark' : 'light')} />
        <Divider />
        <StyleProvider theme={theme}>
          <Badge value="12" />
          <Divider />
          <Tag text="Base tag" />
          <Divider />
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
          <Text h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
          <Divider />
          <Spinner />
          <Divider />
          <Button title="Button" />
          <Divider />
          <Pricing
            titleColor="#3e50fa"
            title="Free"
            price="$0"
            info={['1 CPU', '1024MB Memory', '1000GB Bandwidth']}
            button={{ title: 'GET STARTED' }}
          />
          <Divider />
          <Rating />
        </StyleProvider>
      </ScrollView>
    </Layout>
  );
}