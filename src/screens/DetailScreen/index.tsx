/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../components/Icon';
import {IconSize} from '../../components/Icon/constants';
import icStartEmpty from '../../assets/icons/icStartEmpty.svg';
import icStart from '../../assets/icons/icStart.svg';
import icLine from '../../assets/icons/icLine.svg';
import icClose from '../../assets/icons/icClose.svg';
import styled from './styled';
import ItemEpisode from '../../components/ItemEpisode';
import {PIApiEpisodeInfo, PIApiNewTrending} from '../../interfaces/podcasts.interface';
import imgDetalle from '../../assets/icons/imgDetalle.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../stateManagement/modules/combineReducers';
import { addFavoritePodcats, removeFavoritePodcats } from '../../stateManagement/modules/podcatsRedux/actions';


interface DetailScreenProps {
  dataEpisode: PIApiEpisodeInfo[];
  handleClick: () => void;
  dataFeed: PIApiNewTrending | undefined;
}

export default function DetailScreen({
  dataEpisode,
  handleClick,
  dataFeed,
}: DetailScreenProps) {
  const dispatch = useDispatch();
  const podcats = useSelector((state: RootState) => state.podcats.podcatsArray);

  const renderItemEpisode = (item: PIApiEpisodeInfo, index: number) => {
    return <ItemEpisode key={index} data={item} />;
  };

  const isFavorite = () => {
    const isFavoritePod = podcats.find((item) => item.id === dataFeed?.id);
    if (isFavoritePod) {return true;}
    return false;
  };

  const handleClickFav = () => {
    if (isFavorite()){
      dispatch(removeFavoritePodcats(dataFeed?.id!));
      return;
    }
    dispatch(addFavoritePodcats(dataFeed!));
  };

  return (
    <View style={styled.wrapperContainerDetail}>
      <View style={styled.container}>
        <View style={styled.containerHeader}>
          <TouchableOpacity onPress={() => handleClickFav()}>
            <Icon source={isFavorite() ? icStart : icStartEmpty} size={IconSize.REGULAR} />
          </TouchableOpacity>
          <View style={styled.iconLeft}>
            <Icon source={icLine} size={IconSize.LARGE} />
          </View>
          <TouchableOpacity onPress={handleClick}>
            <Icon source={icClose} size={IconSize.XSMALL} />
          </TouchableOpacity>
        </View>
        <View style={styled.wrapperImage}>
          <Image
            source={
                dataFeed?.image
                  ? {
                      uri: dataFeed?.image,
                    }
                  : imgDetalle
              }
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 160,
              width: 160,
            }}
          />
          <Text style={styled.titleAuthor}>
            {dataFeed?.author || 'Penang Hokkien'}
          </Text>
        </View>
        <View style={styled.wrapperDescription}>
          <Text style={styled.subtitle}>
            {dataFeed?.description ||
              'Simple header with FlatList Simple header with FlatList Simple header with FlatList Simple header with FlatList Simple header with FlatList Simple header with FlatList'}
          </Text>
        </View>
        <Text style={styled.episodeText}>{dataEpisode?.length} episodios</Text>
      </View>
      <FlatList
        data={dataEpisode}
        renderItem={({item, index}) => renderItemEpisode(item, index)}
        contentContainerStyle={styled.body}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
