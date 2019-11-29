import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { Layout } from '../screen';
import {
  Badge,
} from '../../src/components/Badge';

const styles = StyleSheet.create({

});

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Badge value="12" />
    <Badge value="1234" />
    <Badge value="4" bgColor="#ff0000" />
  </Layout>
);