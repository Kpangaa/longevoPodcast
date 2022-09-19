import React from 'react';
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

interface ItemEpisodeProps {
  data: PIApiEpisodeInfo;
}

function ItemEpisode({data}: ItemEpisodeProps) {
  const [play, setPlay] = React.useState(true);
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
            {toHHMMSS(data.duration.toString())}
            {/* {(data.duration / 60).toString().substring(0, 4) + ' mins'} */}
          </Text>
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
