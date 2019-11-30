/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { scale } from '../../src/utils';
import Icon from 'react-native-vector-icons/AntDesign';

export const Layout = ({
  navigation,
  children,
}) => (
    <View>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.layout}>
          {
            navigation &&
            <View style={styles.header}>
              <TouchableOpacity activeOpacity={.95} onPress={() => navigation.goBack()}>
                <Icon name="left" size={24} color="#3e50fa" />
              </TouchableOpacity>
              <Text style={styles.screen}>{navigation.state.routeName}</Text>
            </View>
          }
          {children}
        </View>
      </ScrollView>
    </View>
  );


export const Row = ({
  title,
  children,
}) => (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );

export const Box = ({ value }) => (
  <View style={styles.box}>
    <Text style={styles.boxContent}>{value}</Text>
  </View>
);

export const Title = ({ name }) => <Text style={styles.title}>{name}</Text>

const styles = StyleSheet.create({
  layout: {
    padding: scale(25),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(25),
  },
  row: {
    marginBottom: scale(20),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    marginBottom: scale(12),
    fontSize: 16,
  },
  screen: {
    textAlign: 'center',
    color: '#3e50fa',
    fontSize: 24,
    marginLeft: scale(8),
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#3e50fa',
    marginHorizontal: 5,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    fontSize: 16,
    color: '#fff',
  }
});