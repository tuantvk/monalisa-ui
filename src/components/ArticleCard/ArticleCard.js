/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Text } from '../Text';
import PropTypes from 'prop-types';
import {
  wScale,
  scale,
} from '../../utils';
import {
  gray,
  blue,
} from '../../styles';
import { withStyle } from '../../theme';

class ArticleCard extends Component {
  render() {
    const {
      img,
      title,
      category,
      author,
      time,
      style,
      imageStyle,
      categoryStyle,
      titleStyle,
      footerStyle,
      activeOpacity,
      ...rest
    } = this.props;

    return (
      <TouchableOpacity activeOpacity={activeOpacity} {...rest}>
        <View style={[styles.row, style]}>
          <Image
            source={{ uri: img }}
            style={[styles.img, imageStyle]}
          />
          <View style={styles.content}>
            <View>
              <Text style={[styles.category, categoryStyle]}>{category}</Text>
              <Text style={[styles.title, titleStyle]}>{title}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.footer, footerStyle]}>{author}</Text>
              <Text style={[styles.footer, footerStyle]}>{time}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  img: {
    width: '35%',
    height: wScale(75),
    marginRight: scale(10),
  },
  content: {
    width: '65%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  category: {
    color: blue,
  },
  title: {
    fontSize: 16,
  },
  footer: {
    color: gray,
    fontSize: 11,
    marginRight: scale(10),
  }
});

ArticleCard.defaultProps = {
  activeOpacity: 0.9,
}

ArticleCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  activeOpacity: PropTypes.number,
}


export default withStyle(ArticleCard);