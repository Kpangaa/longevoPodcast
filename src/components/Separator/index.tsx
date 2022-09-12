import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
}

function Separator({style}: Props) {
  return <View style={[styles.separator, style]} />;
}

export default Separator;
