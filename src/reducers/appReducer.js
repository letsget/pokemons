import {
  SET_LOADING,
  SET_ERROR_REQUEST,
  SET_SUCCESS_REQUEST,
  SET_POKEMONS_LIST,
  SET_POKEMON_INFO,
} from '../actions/app';

const initialState = {
  isLoading: false,
  requestError: false,
  requestSuccess: false,
  pokemons: null,
  pokemonInfo: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemons: payload,
      };
      
    case SET_POKEMON_INFO:
      return {
        ...state,
        pokemonInfo: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case SET_ERROR_REQUEST:
      return {
        ...state,
        requestError: payload,
      };

    case SET_SUCCESS_REQUEST:
      return {
        ...state,
        requestSuccess: payload,
      };

    default:
      return state;
  }
};

export { appReducer };
