/* eslint-disable prettier/prettier */
import {PIApiNewTrending} from '../../../interfaces/podcasts.interface';

export interface PodcatsState {
  podcatsArray: PIApiNewTrending[];
}

export const ADD_FAVORITE_PODCATS = '@podcats/ADD_FAVORITE_PODCATS';
export const REMOVE_FAVORITE_PODCATS = '@podcats/REMOVE_FAVORITE_PODCATS';

interface AddFavoritePodcats {
  type: typeof ADD_FAVORITE_PODCATS;
  payload: {podcatsItem: PIApiNewTrending};
}

interface RemoveFavoritePodcats {
  type: typeof REMOVE_FAVORITE_PODCATS;
  payload: {idx: number};
}

export type PodcatsActionsTypes =
| AddFavoritePodcats
| RemoveFavoritePodcats;
