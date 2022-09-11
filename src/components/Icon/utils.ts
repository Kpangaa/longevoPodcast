import {IconSize, ICON_DIMENTION} from './constants';

export const getSizeStyle = (size: IconSize | number) => {
  const iconSize = typeof size === 'number' ? size : ICON_DIMENTION[size];
  return {
    width: iconSize,
    height: iconSize,
  };
};
