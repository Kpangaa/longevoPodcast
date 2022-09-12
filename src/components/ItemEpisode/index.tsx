import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import imgPrueba from '../../assets/icons/imgPrueba.png';
import icPause from '../../assets/icons/icPause.svg';
import icPlay from '../../assets/icons/icPlay.svg';
import {IconSize} from '../Icon/constants';
import Icon from '../Icon';
import styled from './styled';
import Separator from '../Separator';

function ItemEpisode() {
  const [play, setPlay] = React.useState(true);
  return (
    <View style={styled.wrapperContainer}>
      <View style={styled.containerItemEpisode}>
        <Image source={imgPrueba} style={styled.image} />
        <View style={styled.containerItemText}>
          <Text style={styled.title}>884 - Find Pennang</Text>
          <Text style={styled.subTitle}>45 mins</Text>
        </View>
        <TouchableOpacity
          onPress={() => setPlay(!play)}
          style={styled.musicControl}>
          <Icon source={play ? icPlay : icPause} size={IconSize.XXSMALL} />
        </TouchableOpacity>
      </View>
      <Separator />
    </View>
  );
}

export default ItemEpisode;
