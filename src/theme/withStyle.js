/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from "react";
import ThemeContext from './ThemeContext';

const withStyle = Comp => {
  const WrappedComponent = props => (
    <ThemeContext.Consumer>
      {value => <Comp {...props} {...value} />}
    </ThemeContext.Consumer>
  );
  return WrappedComponent;
};

export default withStyle;