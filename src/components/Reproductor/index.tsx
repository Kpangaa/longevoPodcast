/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from './styled';
import imgPrueba from '../../assets/icons/imgPrueba.png';
import {primaryErrorLight, primaryWarningLight} from '../../theme/colors';
import Slider from '@react-native-community/slider';
import Icon from '../Icon';
import icPause from '../../assets/icons/icPause.svg';
import icPlay from '../../assets/icons/icPlay.svg';
import {IconSize} from '../Icon/constants';

interface ReproductorProps {
  data?: any;
}

function Reproductor({data}: ReproductorProps) {
  const [play, setPlay] = useState(false);
  return (
    <View style={styled.containerReproductor}>
      <Image style={styled.imageContainer} source={imgPrueba} />
      <View style={{flex: 0.85}}>
        <Text style={styled.titlePodcasts}>3 - La historia de pennang</Text>
        <Text style={styled.nameAuthor}>Pennang Hokkien</Text>
        <Slider
          style={styled.progressContainer}
          value={0}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#FFFFFF"
          minimumTrackTintColor={primaryErrorLight}
          maximumTrackTintColor={primaryWarningLight}
          onSlidingComplete={() => {}}
        />
        <View style={styled.progressLabelContainer}>
          <Text style={styled.progressLabelTxt}>0:00</Text>
          <Text style={styled.progressLabelTxt}>3:25</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setPlay(!play)}
        style={styled.musicControl}>
        <Icon source={play ? icPlay : icPause} size={IconSize.XXSMALL} />
      </TouchableOpacity>
    </View>
  );
}

export default Reproductor;
