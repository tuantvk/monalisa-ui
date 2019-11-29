import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    const {
      style,
      content,
      children,
    } = this.props;

    return (
      <View style={[
        style,
        styles.row,
        { justifyContent: content },
      ]}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});

Row.propTypes = {
  content: PropTypes.string,
}

Row.defaultProps = {
  content: 'flex-start',
}

export default Row;
