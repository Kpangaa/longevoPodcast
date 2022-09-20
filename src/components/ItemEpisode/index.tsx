/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import imgPrueba from '../../assets/icons/imgPrueba.png';
import icPause from '../../assets/icons/icPause.svg';
import icPlay from '../../assets/icons/icPlay.svg';
import {IconSize} from '../Icon/constants';
import Icon from '../Icon';
import styled from './styled';
import Separator from '../Separator';
import {PIApiEpisodeInfo} from '../../interfaces/podcasts.interface';
import {toHHMMSS} from '../../utils/formatTime';
import { useDispatch, useSelector } from 'react-redux';
import { isPlayPodcatsFunc, isPlayPodcatsOneTimeFunc, itemMusicPodcatsFunc, playPodcats, valuePlayPodcatsFunc } from '../../stateManagement/modules/podcatsRedux/actions';
import Sound from 'react-native-sound';
import { RootState } from '../../stateManagement/modules/combineReducers';

interface ItemEpisodeProps {
  data: PIApiEpisodeInfo;
}

function ItemEpisode({data}: ItemEpisodeProps) {
  const dispatch = useDispatch();
  const [play, setPlay] = React.useState(false);
  const [music, setMusic] = useState<Sound>();
  const [isPlayOne, setIsPlayOne] = useState(false);

  const {isPlayPodcats} = useSelector((state: RootState) => state.podcats);

  const playMusic = () => {
    const summer = new Sound(data.enclosureUrl, Sound.MAIN_BUNDLE, (err) => {
      if (err){
        console.log('err: ', err);
      }
      summer.play((success) => {
        if (success) {
          console.log('Termino de reproducir podcats', success);
          dispatch(valuePlayPodcatsFunc(0));
          setPlay(false);
          dispatch(isPlayPodcatsFunc(false));
        }
      });
    });
    setMusic(summer);
    dispatch(itemMusicPodcatsFunc(summer));
  };

  useEffect(() => {

    return () => {
      setIsPlayOne(false);
    };
  }, [data]);

  const podcatsPlay = () => {
    if (!isPlayOne){
      console.log('data: ', data);
      playMusic();
      dispatch(isPlayPodcatsOneTimeFunc(true));
      dispatch(isPlayPodcatsFunc(true));
      setPlay(true);
      setIsPlayOne(true);
      dispatch(playPodcats(data));
      dispatch(valuePlayPodcatsFunc(0));
      return;
    }
    if (music && play){
      music?.pause();
      dispatch(isPlayPodcatsFunc(false));
      setPlay(false);
    } else {
      music?.play();
      dispatch(isPlayPodcatsFunc(true));
      setPlay(true);
    }
  };

  return (
    <View style={styled.wrapperContainer}>
      <View style={styled.containerItemEpisode}>
        <Image
          source={
            data.image
              ? {
                  uri: data.image,
                }
              : imgPrueba
          }
          resizeMode="contain"
          style={styled.image}
        />
        <View style={styled.containerItemText}>
          <Text style={styled.title}>{data.title.substring(0, 45)}</Text>
          <Text style={styled.subTitle}>
            {toHHMMSS((data.duration - 1).toString())}
          </Text>
        </View>
        <TouchableOpacity
          onPress={podcatsPlay}
          style={styled.musicControl}>
          <Icon source={play && isPlayPodcats ? icPause : icPlay } size={IconSize.XXSMALL} />
        </TouchableOpacity>
      </View>
      <Separator />
    </View>
  );
}

export default ItemEpisode;
