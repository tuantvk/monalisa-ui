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
import {
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button,
  ButtonGroup,
} from '../../src/components/Button';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  btn: {
    marginVertical: 10,
  }
});

const ButtonGroupItem = () => <Text>ButtonGroupItem</Text>

export default ({ navigation }) => (
  <Layout navigation={navigation}>
    <Title name="Basic button" />
    <Button
      buttonStyle={styles.btn}
      title="Default"
    />
    <Button
      buttonStyle={styles.btn}
      title="Button transparent"
      transparent
    />
    <Button
      buttonStyle={styles.btn}
      title="Button outline"
      outline
    />
    <Title name="Raised button" />
    <Button
      buttonStyle={styles.btn}
      title="Raised"
      raised
    />
    <Button
      buttonStyle={styles.btn}
      title="Raised"
      outline
      raised
    />
    <Title name="Loading button" />
    <Button
      buttonStyle={styles.btn}
      title="Loading"
      loading
    />
    <Button
      buttonStyle={styles.btn}
      title="Loading"
      loading
      transparent
    />
    <Button
      buttonStyle={styles.btn}
      title="Loading"
      loading
      outline
    />
    <Title name="Disabled button" />
    <Button
      buttonStyle={styles.btn}
      title="Disabled"
      disabled
    />
    <Button
      buttonStyle={styles.btn}
      title="Disabled"
      disabled
      transparent
    />
    <Button
      buttonStyle={styles.btn}
      title="Disabled"
      disabled
      outline
    />
    <Title name="Icon button" />
    <Button
      buttonStyle={styles.btn}
      title="Icon"
      iconRight={<Icon name="checkcircleo" color="#fff" size={20} />}
    />
    <Button
      buttonStyle={styles.btn}
      title="Icon"
      transparent
      iconRight={<Icon name="checkcircleo" color="#000" size={20} />}
    />
    <Button
      buttonStyle={styles.btn}
      title="Icon"
      outline
      iconRight={<Icon name="checkcircleo" color="#3e50fa" size={20} />}
    />
    <Title name="Button group" />
    <ButtonGroup
      buttons={['Like', 'Share', 'More']}
      onPress={index => alert(index)}
    />
    <Title name="Button group" />
    <ButtonGroup
      buttons={[{ component: ButtonGroupItem }, { component: ButtonGroupItem }]}
      onPress={index => alert(index)}
    />
  </Layout>
);