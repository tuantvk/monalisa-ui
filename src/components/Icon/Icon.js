import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class Icon extends Component {

  _renderIcon = (type, name, rest) => {
    if (!type || type === 'AntDesign') {
      return <AntDesign name={name} {...rest} />
    }
    if (type === 'Entypo') {
      return <Entypo name={name} {...rest} />
    }
    if (type === 'EvilIcons') {
      return <EvilIcons name={name} {...rest} />
    }
    if (type === 'Feather') {
      return <Feather name={name} {...rest} />
    }
    if (type === 'FontAwesome') {
      return <FontAwesome name={name} {...rest} />
    }
    if (type === 'FontAwesome5') {
      return <FontAwesome5 name={name} {...rest} />
    }
    if (type === 'Fontisto') {
      return <Fontisto name={name} {...rest} />
    }
    if (type === 'Foundation') {
      return <Foundation name={name} {...rest} />
    }
    if (type === 'Ionicons') {
      return <Ionicons name={name} {...rest} />
    }
    if (type === 'MaterialIcons') {
      return <MaterialIcons name={name} {...rest} />
    }
    if (type === 'MaterialCommunityIcons') {
      return <MaterialCommunityIcons name={name} {...rest} />
    }
    if (type === 'Octicons') {
      return <Octicons name={name} {...rest} />
    }
    if (type === 'Zocial') {
      return <Zocial name={name} {...rest} />
    }
    if (type === 'SimpleLineIcons') {
      return <SimpleLineIcons name={name} {...rest} />
    }

  }

  render() {
    const {
      type,
      ios,
      android,
      name,
      ...rest
    } = this.props;
    if (ios && android) {
      return this._renderIcon(type, Platform.OS === 'android' ? android : ios, rest);
    }
    return this._renderIcon(type, name, rest);
  }
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'AntDesign',
    'Ionicons',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'FontAwesome5',
    'Foundation',
    'MaterialIcons',
    'MaterialCommunityIcons',
    'Octicons',
    'Roboto',
    'SimpleLineIcons',
    'Zocial',
  ]),
  ios: PropTypes.string,
  android: PropTypes.string,
  name: PropTypes.string,
}

export default Icon;