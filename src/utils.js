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