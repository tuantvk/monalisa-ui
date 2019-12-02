/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;

// padding, margin, fontSize, ....
export const scale = size => width / guidelineBaseWidth * size;

// width
export const wScale = size => height / guidelineBaseHeight * size;

// height
export const hScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const subNumber = (a, b) => Number(a) - Number(b);

export const social = {
  github: '#000000',
  facebook: '#3b5998',
  youtube: '#bb0000',
  instagram: '#517fa4',
  twitter: '#00aced',
  pinterest: '#cb2027',
  linkedin: '#007bb6',
  vimeo: '#aad450',
}

export const checkTypeSocical = type => {
  return social[type];
} 