declare module '*.png';
declare module '*.jpg';
declare module '*.json';
declare module '*.html';
declare module 'crypto';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
