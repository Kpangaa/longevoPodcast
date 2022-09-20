/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from '../Icon';
import {IconSize} from '../Icon/constants';
import styled from './styled';
import icSearch from '../../assets/icons/icSearch.svg';

function Header() {
  return (
    <View style={styled.containerSearch}>
      <Text style={styled.titleHome}>Podcasts</Text>
      <TouchableOpacity
        onPress={() => console.log('LOCO')}
        style={{marginRight: 5}}>
        <Icon source={icSearch} size={IconSize.SMALL} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
