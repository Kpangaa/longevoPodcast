/* eslint-disable prettier/prettier */
/* eslint-disable no-fallthrough */
import { PIApiEpisodeInfo } from '../../../interfaces/podcasts.interface';
import {ADD_FAVORITE_PODCATS, IS_PLAY_PODCATS, IS_PLAY_PODCATS_ONE_TIME, ITEM_MUSIC_PODCATS, PLAY_PODCATS, PodcatsState, REMOVE_FAVORITE_PODCATS, VALUE_PLAY_PODCATS} from './types';
import Sound from 'react-native-sound';


const initialState: PodcatsState = {
    podcatsArray: [],
    podcatsItemMp3: {} as PIApiEpisodeInfo,
    isPlayPodcatsOneTime: false,
    itemMusicPodcats: null as unknown as Sound,
    isPlayPodcats: false,
    valuePlayPodcats: 0,
};

const pokemonReducer = (state = initialState, action: any): PodcatsState => {
  switch (action.type) {
    case ADD_FAVORITE_PODCATS: {
      const { podcatsArray } = state;
      podcatsArray.push(action.payload.podcatsItem);
    }
    case REMOVE_FAVORITE_PODCATS: {
      const { podcatsArray } = state;
      const newArray = podcatsArray.filter((item) => item.id !== action.payload.idx);
      return { ...state, podcatsArray: newArray};
    }
    case PLAY_PODCATS: {
      return { ...state, podcatsItemMp3: action.payload.podcatsItemPlay};
    }
    case IS_PLAY_PODCATS_ONE_TIME: {
      return { ...state, isPlayPodcatsOneTime: action.payload.isPlayPodcatsOneTime};
    }
    case ITEM_MUSIC_PODCATS: {
      return {...state, itemMusicPodcats: action.payload.itemMusicPodcats};
    }
    case IS_PLAY_PODCATS: {
      return { ...state, isPlayPodcats: action.payload.isPlayPodcats};
    }
    case VALUE_PLAY_PODCATS: {
      return { ...state, valuePlayPodcats: action.payload.valuePlayPodcats};
    }
    default:
      return state;
  }
};

export default pokemonReducer;
