import { episodesAPI } from "../../API";

let initialState = {
    episodes: [],
    currentEpisode: null,
    filters: {
        name: ''
    },
    pageSize: 20,
    totalEpisodesCount: 0,
    currentPage: 1,
    characterOfEpisode: [],
};

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_EPISODES = 'SET_EPISODES';
const SET_CURRENT_EPISODE = 'SET_CURRENT_EPISODE';
const SET_CHARACTERS_OF_EPISODE = 'SET_CHARACTERS_OF_EPISODE';
const SET_FILTERS = 'SET_FILTERS';
const RESET_FILTERS = 'RESET_FILTERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_EPISODES_COUNT = 'SET_TOTAL_EPISODES_COUNT';

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_EPISODES:
            return {
                ...state,
                episodes: action.episodes
            }
        case SET_CURRENT_EPISODE:
            return {
                ...state,
                currentEpisode: action.id
            };
        case SET_CHARACTERS_OF_EPISODE:
            return {
                ...state,
                characterOfEpisode: action.characterOfEpisode
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_EPISODES_COUNT:
            return {
                ...state,
                totalEpisodesCount: action.totalEpisodesCount
            };
        case SET_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.filterType]: action.value
                }
            };
        case RESET_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    name: ''
                }
            };
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setEpisodes = (episodes) => ({ type: SET_EPISODES, episodes })
export const setCurrentEpisode = (id) => ({ type: SET_CURRENT_EPISODE, id });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalEpisodesCount = (totalEpisodesCount) => ({ type: SET_TOTAL_EPISODES_COUNT, totalEpisodesCount });
export const setFilters = (filterType, value) => ({ type: SET_FILTERS, filterType, value });
export const resetFilters = () => ({ type: RESET_FILTERS });
export const setCharactersOfEpisode = (characterOfEpisode) => ({ type: SET_CHARACTERS_OF_EPISODE, characterOfEpisode })

export const getAllEpisodes = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    episodesAPI.getAllEpisodes()
        .then(response => {
            dispatch(setEpisodes(response.data.results))
            dispatch(setTotalEpisodesCount(response.data.info.count))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(toggleIsLoading(false))
        })
}

export const getCurrentEpisode = (id) => (dispatch) => {
    dispatch(setCurrentEpisode(id));
};

export const getCharactersOfEpisode = (characters = '') => (dispatch) => {
    dispatch(toggleIsLoading(true))
    episodesAPI.getCharactersOfEpisode(characters)
        .then(response => {
            dispatch(setCharactersOfEpisode(response.data))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(toggleIsLoading(false))
        })
}

export const getFilteredEpisode = (currentPage = 1, name = '') => (dispatch) => {
    episodesAPI.getFilteredEpisode(currentPage, name)
        .then(response => {
            dispatch(toggleIsLoading(false));
            dispatch(setEpisodes(response.data.results));
            // dispatch(setTotalEpisodesCount(response.data.info.count));
        })
        .catch(err => {
            dispatch(setEpisodes([{ name: 'There is nothing here' }]));
            console.log(err);
        })
        .finally(() => {
            dispatch(toggleIsLoading(false));
        });
};

export const getFilters = (filterType, value) => (dispatch) => {
    dispatch(setFilters(filterType, value));
};

export default episodesReducer;