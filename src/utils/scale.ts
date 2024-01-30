import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('screen');

// based on iPhone 15 Pro screen size
const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;

export const scaleWidth = (size: number) =>
  PixelRatio.roundToNearestPixel((size * width) / BASE_WIDTH);

export const scaleHeight = (size: number) =>
  PixelRatio.roundToNearestPixel((size * height) / BASE_HEIGHT);
