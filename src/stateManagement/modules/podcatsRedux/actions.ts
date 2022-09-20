/* eslint-disable prettier/prettier */
import { PIApiNewTrending } from '../../../interfaces/podcasts.interface';
import {
  PodcatsActionsTypes,
  ADD_FAVORITE_PODCATS,
  REMOVE_FAVORITE_PODCATS,
} from './types';

export const addFavoritePodcats = (podcatsItem: PIApiNewTrending): PodcatsActionsTypes => {
    return {
    type: ADD_FAVORITE_PODCATS,
    payload: {podcatsItem},
  };
};

export const removeFavoritePodcats = (idx: number): PodcatsActionsTypes => {
  console.log('id: ', idx);
  return {
  type: REMOVE_FAVORITE_PODCATS,
  payload: {idx},
};
};
