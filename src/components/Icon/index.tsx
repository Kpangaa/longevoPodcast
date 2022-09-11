import React from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import {SvgProps} from 'react-native-svg';

import styles from './styles';
import {primaryBlack} from '../../theme/colors';
import {IconSize} from './constants';
import {getSizeStyle} from './utils';

export type IconProps = {
  source: React.FC<SvgProps>;
  disabled?: boolean;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
  size?: IconSize | number;
  testID?: string;
  customSize?: {
    width: number;
    height: number;
  };
};

const DEFAULT_COLOR = primaryBlack;

function Icon({
  source: Source,
  style,
  tintColor = DEFAULT_COLOR,
  size = IconSize.MEDIUM,
  disabled = false,
  customSize,
}: IconProps) {
  return (
    <Source
      fill={tintColor}
      style={[disabled && styles.disabled, style]}
      {...(customSize ? customSize : getSizeStyle(size))}
    />
  );
}

export default Icon;
