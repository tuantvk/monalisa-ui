/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import { scale } from '../../utils';
import {
  gray,
  yellow,
} from '../../styles';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.defaultRating,
    }
  }

  _onChange = rating => {
    this.setState({ rating });
    this.props.onChange && this.props.onChange(rating);
  }

  render() {
    const { rating } = this.state;
    const {
      reviews,
      size,
      style,
      ratingColor,
      ratingBackgroundColor,
      titleStyle,
      showTitle,
    } = this.props;

    return (
      <View style={style}>
        {showTitle && rating !== -1 && <Text style={[styles.ratingTitle, titleStyle]}>{reviews[rating]}</Text>}
        <View style={styles.review}>
          {
            reviews.map((review, index) => (
              <TouchableOpacity key={index} activeOpacity={1} onPress={() => this._onChange(index)}>
                <Icon
                  color={index <= rating ? ratingBackgroundColor : ratingColor}
                  name={index <= rating ? "star" : "staro"}
                  size={size}
                />
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  review: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ratingTitle: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: scale(10),
  }
});

Rating.defaultProps = {
  reviews: ['Bad', 'Okay', 'Good', 'Great', 'Very Good'],
  size: 30,
  defaultRating: -1,
  showTitle: true,
  ratingColor: gray,
  ratingBackgroundColor: yellow,
}

Rating.propTypes = {
  reviews: PropTypes.arrayOf([PropTypes.string]),
  size: PropTypes.number,
  defaultRating: PropTypes.number,
  ratingColor: PropTypes.string,
  ratingBackgroundColor: PropTypes.string,
  showTitle: PropTypes.bool,
  onChange: PropTypes.func,
}


export default Rating;