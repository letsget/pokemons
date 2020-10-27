import { axios } from '../app/axiosConfig';

export const SET_POKEMONS_LIST = 'SET_POKEMONS_LIST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR_REQUEST = 'SET_ERROR_REQUEST';
export const SET_SUCCESS_REQUEST = 'SET_SUCCESS_REQUEST';
export const SET_POKEMON_INFO = "SET_POKEMON_INFO";

export const setPokemonsList = (pokemons) => ({
  type: SET_POKEMONS_LIST,
  payload: pokemons,
});

export const setPokemonInfo = (pokemon) => ({
  type: SET_POKEMON_INFO,
  payload: pokemon,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setErrorRequest = (status) => ({
  type: SET_ERROR_REQUEST,
  payload: status,
});

export const setSuccessRequest = (status) => ({
  type: SET_SUCCESS_REQUEST,
  payload: status,
});

export const loadPokemons = async (dispatch, activePage) => {
  dispatch(setLoading(true));
  try {
    const {
      data: { cards },
    } = await axios.get(`/cards?pageSize=12&page=${activePage}`);
    dispatch(setPokemonsList(cards));
    dispatch(setErrorRequest(false));
  } catch (e) {
    dispatch(setErrorRequest(true));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loadPokemonById = async (dispatch, id) => {
  dispatch(setLoading(true));
  try {
    const {
      data: { card },
    } = await axios.get(`/cards/${id}`);
    dispatch(setPokemonInfo(card));
    dispatch(setErrorRequest(false));
  } catch (e) {
    dispatch(setErrorRequest(true));
  } finally {
    dispatch(setLoading(false));
  }
};