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
    marginLeft: scale(30),
  }
});