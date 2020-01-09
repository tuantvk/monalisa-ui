/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import ThemeContext from './ThemeContext';

const StyleProvider = ({
  style,
  theme,
  children,
}) => (
    <ThemeContext.Provider value={{ ...style, theme }}>
      {children}
    </ThemeContext.Provider>
  );

export default StyleProvider;