import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Layout } from '../screen';
import { Icon } from '../../src/components/Icon';

const styles = StyleSheet.create({
  row: {
    marginBottom: 25,
    borderBottomColor: '#dfe1e6',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  type: {
    fontSize: 16,
    marginBottom: 8,
  }
});

const Row = ({
  type,
  children,
}) => (
    <View style={styles.row}>
      <Text style={styles.type}>{type}</Text>
      {children}
    </View>
  );

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Row type="AntDesign">
      <Icon name="pluscircleo" type="AntDesign" size={30} />
    </Row>
    <Row type="Entypo">
      <Icon name="add-user" type="Entypo" size={30} />
    </Row>
    <Row type="EvilIcons">
      <Icon name="arrow-down" type="EvilIcons" size={30} />
    </Row>
    <Row type="Feather">
      <Icon name="activity" type="Feather" size={30} />
    </Row>
    <Row type="FontAwesome">
      <Icon name="glass" type="FontAwesome" size={30} />
    </Row>
    <Row type="FontAwesome5">
      <Icon name="accusoft" type="FontAwesome5" size={30} />
    </Row>
    <Row type="Fontisto">
      <Icon name="atlassian" type="Fontisto" size={30} />
    </Row>
    <Row type="Foundation">
      <Icon name="address-book" type="Foundation" size={30} />
    </Row>
    <Row type="Ionicons">
      <Icon name="ios-add" type="Ionicons" size={30} />
    </Row>
    <Row type="MaterialIcons">
      <Icon name="ac-unit" type="MaterialIcons" size={30} />
    </Row>
    <Row type="MaterialCommunityIcons">
      <Icon name="access-point" type="MaterialCommunityIcons" size={30} />
    </Row>
    <Row type="Octicons">
      <Icon name="alert" type="Octicons" size={30} />
    </Row>
    <Row type="Zocial">
      <Icon name="amazon" type="Zocial" size={30} />
    </Row>
    <Row type="SimpleLineIcons">
      <Icon name="user" type="SimpleLineIcons" size={30} />
    </Row>
  </Layout>
);