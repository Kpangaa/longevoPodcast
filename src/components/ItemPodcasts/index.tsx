import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import imgPrueba from '../../assets/icons/imgPrueba.png';
import icArrowRight from '../../assets/icons/icArrowRight.svg';
import {IconSize} from '../Icon/constants';
import styled from './styled';

const ItemPodcasts = () => {
  const handleClick = () => {
    console.log('Abre el botton sheet');
  };
  return (
    <View style={styled.containerItemPodcasts}>
      <Image source={imgPrueba} />
      <View style={styled.containerItemText}>
        <Text style={styled.title}>Pennang Hokkien</Text>
        <Text style={styled.subTitle}>
          La historia de Pennan Hokkien, un gran jugador de softball
        </Text>
        <Text style={styled.textEpisode}>844 Episodios</Text>
      </View>
      <TouchableOpacity onPress={handleClick}>
        <Icon source={icArrowRight} size={IconSize.SMALL} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemPodcasts;
