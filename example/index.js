/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import routes from './routes';
import { scale } from '../src/utils';
import { Layout } from './screen';

const CardExample = ({
  name,
}) => (
    <View style={styles.card}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );

export default ({ navigation }) => (
  <View style={styles.container}>
    <Layout>
      <Text style={styles.appName}>MonalisaUI</Text>
      {
        routes.map(route =>
          <TouchableOpacity key={route} activeOpacity={.95} onPress={() => navigation.navigate(route)}>
            <CardExample
              name={route}
            />
          </TouchableOpacity>
        )
      }
    </Layout>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  card: {
    backgroundColor: '#3e50fa',
    borderRadius: scale(8),
    padding: scale(15),
    marginBottom: scale(15),
    alignItems: 'center',
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  appName: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: scale(25),
  }
});