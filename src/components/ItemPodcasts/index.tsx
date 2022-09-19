import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import icArrowRight from '../../assets/icons/icArrowRight.svg';
import {IconSize} from '../Icon/constants';
import styled from './styled';
import {
  PIApiEpisodeInfo,
  PIApiNewTrending,
} from '../../interfaces/podcasts.interface';
import PodcatsService from '../../services/podcats.services';
import BottomSheetBehavior from 'reanimated-bottom-sheet';

interface ItemPodcastsProps {
  sheetRef?: React.RefObject<BottomSheetBehavior>;
  data: PIApiNewTrending;
  setDataEpisode: React.Dispatch<React.SetStateAction<PIApiEpisodeInfo[]>>;
  setDataFeed: React.Dispatch<
    React.SetStateAction<PIApiNewTrending | undefined>
  >;
}

const ItemPodcasts = ({
  sheetRef,
  data,
  setDataEpisode,
  setDataFeed,
}: ItemPodcastsProps) => {
  const handleClick = async () => {
    const episode = await PodcatsService.findById(data.id);
    console.log('episode: ', episode?.count);
    setDataEpisode(episode?.items!);
    setDataFeed(data);
    sheetRef?.current?.snapTo(0);
  };
  return (
    <View style={styled.containerItemPodcasts}>
      <Image
        source={{
          uri: data.image,
        }}
        resizeMode="contain"
        style={styled.imageContainer}
      />
      <View style={styled.containerItemText}>
        <Text style={styled.title}>{data.title}</Text>
        <Text style={styled.subTitle}>
          {data.description.substring(0, 60) + ' ...'}
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
