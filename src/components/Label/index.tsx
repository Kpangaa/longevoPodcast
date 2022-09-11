import React from 'react';
import {Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {primaryWhite} from '../../theme/colors';
import Icon from '../Icon';
import {IconSize} from '../Icon/constants';
import styled from './styled';

interface LabelProps {
  title: string;
  iconLeft?: boolean;
  componentRight?: boolean;
  icon?: React.FC<SvgProps>;
  iconTintColor?: string;
  count?: number;
  textColor?: string;
  backgroundColor?: string;
}

const Label = ({
  title,
  iconLeft,
  componentRight,
  icon,
  iconTintColor,
  count,
  textColor = primaryWhite,
  backgroundColor = primaryWhite,
}: LabelProps) => {
  return (
    <View style={[styled.container, {backgroundColor}]}>
      {iconLeft && (
        <Icon source={icon!} size={IconSize.MSMALL} tintColor={iconTintColor} />
      )}
      <Text style={[styled.title, {color: textColor}]}>{title}</Text>
      {componentRight && (
        <View style={styled.count}>
          <Text style={styled.textCount}>{count}</Text>
        </View>
      )}
    </View>
  );
};

export default Label;
