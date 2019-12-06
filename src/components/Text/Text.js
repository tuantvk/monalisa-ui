/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React, { Component } from 'react';
import {
  Text as RNText,
} from 'react-native';
import PropTypes from 'prop-types';
import { black } from '../../styles';
import { scale } from '../../utils';
import { withStyle } from '../../theme';

class Text extends Component {
  render() {
    const {
      style,
      h1, h2, h3, h4, h5,
      children,
      color,
      bold,
      ...rest
    } = this.props;

    return (
      <RNText {...rest}
        style={[
          { color },
          h1 && { fontSize: scale(40) },
          h2 && { fontSize: scale(34) },
          h3 && { fontSize: scale(28) },
          h4 && { fontSize: scale(22) },
          h5 && { fontSize: scale(18) },
          bold && { fontWeight: '700' },
          style,
        ]}>{children}</RNText>
    );
  }
}

Text.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  color: black,
  bold: false,
}

Text.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  color: PropTypes.string,
  bold: PropTypes.bool,
}

export default withStyle(Text);
