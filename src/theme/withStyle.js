/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from "react";
import ThemeContext from './ThemeContext';
import { checkTheme } from '../utils';

const withStyle = Comp => {
  const WrappedComponent = props => {

    return (
      <ThemeContext.Consumer>
        {value => {

          let theme = value && value.theme;
          let formatTheme = Object.assign(
            {
              color: props.color,
              bgColor: props.bgColor,
            },
            checkTheme(theme)
          );

          return (
            <Comp {...props} {...value} {...formatTheme} />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
  return WrappedComponent;
};

export default withStyle;