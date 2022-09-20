/* eslint-disable prettier/prettier */
/* eslint-disable no-fallthrough */
import {ADD_FAVORITE_PODCATS, PodcatsState, REMOVE_FAVORITE_PODCATS} from './types';

const initialState: PodcatsState = {
    podcatsArray: [],
};

const pokemonReducer = (state = initialState, action: any): PodcatsState => {
  switch (action.type) {
    case ADD_FAVORITE_PODCATS: {
      const { podcatsArray } = state;
      console.log('action.payload.podcatsItem: ', action.payload.podcatsItem);
      console.log('action.payload', action.payload);
      podcatsArray.push(action.payload.podcatsItem);
    }
    case REMOVE_FAVORITE_PODCATS: {
      const { podcatsArray } = state;
      const newArray = podcatsArray.filter((item) => item.id !== action.payload.idx);
      return { ...state, podcatsArray: newArray};
    }
    default:
      return state;
  }
};

export default pokemonReducer;
