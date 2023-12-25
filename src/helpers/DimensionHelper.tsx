import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Standard screen sizes
const standardWidth = 375; // iPhone 6/7/8 width
const standardHeight = 667; // iPhone 6/7/8 height

// Function to calculate responsive width
export const responsiveWidth = (value: number): number => {
  return (value / standardWidth) * width;
};

// Function to calculate responsive height
export const responsiveHeight = (value: number): number => {
  return (value / standardHeight) * height;
};

// Function to calculate responsive font size
export const responsiveFontSize = (value: number): number => {
  const ratio = value / standardWidth;
  const newSize = Math.round(ratio * width);
  return newSize;
};
