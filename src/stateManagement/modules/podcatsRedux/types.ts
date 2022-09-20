/* eslint-disable prettier/prettier */
import {PIApiEpisodeInfo, PIApiNewTrending} from '../../../interfaces/podcasts.interface';
import Sound from 'react-native-sound';


export interface PodcatsState {
  podcatsArray: PIApiNewTrending[];
  podcatsItemMp3: PIApiEpisodeInfo;
  isPlayPodcatsOneTime: boolean;
  itemMusicPodcats: Sound;
  isPlayPodcats: boolean;
  valuePlayPodcats: number;
}

export const ADD_FAVORITE_PODCATS = '@podcats/ADD_FAVORITE_PODCATS';
export const REMOVE_FAVORITE_PODCATS = '@podcats/REMOVE_FAVORITE_PODCATS';
export const PLAY_PODCATS = '@podcats/PLAY_PODCATS';
export const IS_PLAY_PODCATS_ONE_TIME = '@podcats/IS_PLAY_PODCATS_ONE_TIME';
export const ITEM_MUSIC_PODCATS = '@podcats/ITEM_MUSIC_PODCATS';
export const IS_PLAY_PODCATS = '@podcats/IS_PLAY_PODCATS';
export const VALUE_PLAY_PODCATS = '@podcats/VALUE_PLAY_PODCATS';

interface AddFavoritePodcats {
  type: typeof ADD_FAVORITE_PODCATS;
  payload: {podcatsItem: PIApiNewTrending};
}

interface RemoveFavoritePodcats {
  type: typeof REMOVE_FAVORITE_PODCATS;
  payload: {idx: number};
}

interface PlayPodcats {
  type: typeof PLAY_PODCATS;
  payload: {podcatsItemPlay: PIApiEpisodeInfo};
}

interface IsPlayPodcatsOneTime {
  type: typeof IS_PLAY_PODCATS_ONE_TIME;
  payload: {isPlayPodcatsOneTime: boolean};
}

interface ItemMusicPodcats {
  type: typeof ITEM_MUSIC_PODCATS;
  payload: {itemMusicPodcats: Sound};
}

interface IsPlayPodcats {
  type: typeof IS_PLAY_PODCATS;
  payload: {isPlayPodcats: boolean};
}

interface ValuePlayPodcats {
  type: typeof VALUE_PLAY_PODCATS;
  payload: {valuePlayPodcats: number};
}

export type PodcatsActionsTypes =
| AddFavoritePodcats
| RemoveFavoritePodcats
| PlayPodcats
| IsPlayPodcatsOneTime
| ItemMusicPodcats
| IsPlayPodcats
| ValuePlayPodcats;
