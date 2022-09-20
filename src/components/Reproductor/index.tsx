/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from './styled';
import imgPrueba from '../../assets/icons/imgPrueba.png';
import {primaryErrorLight, primaryWarningLight} from '../../theme/colors';
import Slider from '@react-native-community/slider';
import Icon from '../Icon';
import icPause from '../../assets/icons/icPause.svg';
import icPlay from '../../assets/icons/icPlay.svg';
import {IconSize} from '../Icon/constants';
import { RootState } from '../../stateManagement/modules/combineReducers';
import { useDispatch, useSelector } from 'react-redux';
import { isPlayPodcatsFunc } from '../../stateManagement/modules/podcatsRedux/actions';
import { toHHMMSS } from '../../utils/formatTime';


function Reproductor() {
  const [second, setSecond] = useState(0);
  const dispatch = useDispatch();
  const {podcatsItemMp3, itemMusicPodcats, isPlayPodcats} = useSelector((state: RootState) => state.podcats);

  const podcatsPlay = () => {
    if (!itemMusicPodcats) {return;}
    if (isPlayPodcats){
      itemMusicPodcats?.pause();
      dispatch(isPlayPodcatsFunc(false));
    } else {
      itemMusicPodcats?.play();
      dispatch(isPlayPodcatsFunc(true));
    }
  };

  useEffect(() => {
    if (itemMusicPodcats && isPlayPodcats) {
      if (isPlayPodcats){
        setInterval(() => {
          itemMusicPodcats.getCurrentTime((seconds) => {
            setSecond(seconds);
            // dispatch(valuePlayPodcatsFunc(seconds));
          });
        }, 100);}
    }
  return () => {
    console.log('DEMONTA EL COMPONENTE');
    clearInterval( setInterval(() => {
      itemMusicPodcats.getCurrentTime((seconds) => {
        console.log('ENTRA ACA', seconds);
      // setSecond(seconds - itemMusicPodcats.getDuration());
    });
  }, 100));
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isPlayPodcats]);

  return (
    <View style={styled.containerReproductor}>
      <Image style={styled.imageContainer} source={
            podcatsItemMp3?.image
              ? {
                  uri: podcatsItemMp3.image,
                }
              : imgPrueba
          } />
      <View style={{flex: 0.85}}>
        <Text style={styled.titlePodcasts}>{podcatsItemMp3?.title ? podcatsItemMp3.title.substring(0,38) + ' ' + '...' : '3 - La historia de pennang'}</Text>
        <Text style={styled.nameAuthor}>Pennang Hokkien</Text>
        <Slider
          style={styled.progressContainer}
          value={second}
          minimumValue={0}
          maximumValue={podcatsItemMp3.duration - 1}
          thumbTintColor="#FFFFFF"
          minimumTrackTintColor={primaryErrorLight}
          maximumTrackTintColor={primaryWarningLight}
          onSlidingComplete={(value) => {
            itemMusicPodcats.setCurrentTime(value);
          }}
        />
        <View style={styled.progressLabelContainer}>
          <Text style={styled.progressLabelTxt}>{new Date(second * 1000).toISOString().substring(14, 19)}</Text>
          <Text style={styled.progressLabelTxt}>{podcatsItemMp3.duration ? toHHMMSS((podcatsItemMp3.duration - 1).toString()) : '03:35'}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={podcatsPlay}
        style={styled.musicControl}>
        <Icon source={isPlayPodcats ? icPause : icPlay} size={IconSize.XXSMALL} />
      </TouchableOpacity>
    </View>
  );
}

export default Reproductor;
