/* eslint-disable prettier/prettier */
import { PIApiEpisodeInfo, PIApiNewTrending } from '../../../interfaces/podcasts.interface';
import {
  PodcatsActionsTypes,
  ADD_FAVORITE_PODCATS,
  REMOVE_FAVORITE_PODCATS,
  PLAY_PODCATS,
  IS_PLAY_PODCATS_ONE_TIME,
  ITEM_MUSIC_PODCATS,
  IS_PLAY_PODCATS,
  VALUE_PLAY_PODCATS,
} from './types';
import Sound from 'react-native-sound';


export const addFavoritePodcats = (podcatsItem: PIApiNewTrending): PodcatsActionsTypes => {
    return {
    type: ADD_FAVORITE_PODCATS,
    payload: {podcatsItem},
  };
};

export const removeFavoritePodcats = (idx: number): PodcatsActionsTypes => {
  return {
    type: REMOVE_FAVORITE_PODCATS,
    payload: {idx},
  };
};

export const playPodcats = (podcatsItemPlay: PIApiEpisodeInfo): PodcatsActionsTypes => {
  return {
    type: PLAY_PODCATS,
    payload: {podcatsItemPlay},
  };
};

export const isPlayPodcatsOneTimeFunc = (isPlayPodcatsOneTime: boolean): PodcatsActionsTypes => {
  return {
    type: IS_PLAY_PODCATS_ONE_TIME,
    payload: {isPlayPodcatsOneTime},
  };
};

export const itemMusicPodcatsFunc = (itemMusicPodcats: Sound): PodcatsActionsTypes => {
  return {
    type: ITEM_MUSIC_PODCATS,
    payload: {itemMusicPodcats},
  };
};

export const isPlayPodcatsFunc = (isPlayPodcats: boolean): PodcatsActionsTypes => {
  return {
    type: IS_PLAY_PODCATS,
    payload: {isPlayPodcats},
  };
};

export const valuePlayPodcatsFunc = (valuePlayPodcats: number): PodcatsActionsTypes => {
  return {
    type: VALUE_PLAY_PODCATS,
    payload: {valuePlayPodcats},
  };
};

