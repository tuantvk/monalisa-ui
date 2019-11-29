import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Layout } from '../screen';
import { Row } from '../../src/components/Row';

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#3e50fa',
    marginHorizontal: 5,
    marginBottom: 50,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
  }
});

const Box = () => (
  <View style={styles.box} />
);

const Title = ({ name }) => <Text style={styles.title}>{name}</Text>

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="flex-start" />
    <Row>
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="space-between" />
    <Row content="space-between">
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="space-around" />
    <Row content="space-around">
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="flex-end" />
    <Row content="flex-end">
      <Box />
      <Box />
      <Box />
    </Row>
    <Title name="space-evenly" />
    <Row content="space-evenly">
      <Box />
      <Box />
      <Box />
    </Row>
  </Layout>
);