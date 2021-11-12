import { charactersAPI } from '../../API/index';

let initialState = {
    characters: [],
    currentCharacter: null,
    filters: {
        status: '',
        species: '',
        gender: ''
    },
    pageSize: 20,
    totalCharactersCount: 0,
    currentPage: 1,
};

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
const SET_FILTERS = 'SET_FILTERS';
const RESET_FILTERS = 'RESET_FILTERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CHARACTERS_COUNT = 'SET_TOTAL_CHARACTERS_COUNT';

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.characters
            };
        case SET_CURRENT_CHARACTER:
            return {
                ...state,
                currentCharacter: action.id
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_CHARACTERS_COUNT:
            return {
                ...state,
                totalCharactersCount: action.totalCharactersCount
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
                    status: '',
                    species: '',
                    gender: ''
                }
            };
        default:
            return state;
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const setCharacters = (characters) => ({ type: SET_CHARACTERS, characters });
export const setCurrentCharacter = (id) => ({ type: SET_CURRENT_CHARACTER, id });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCharactersCount = (totalCharactersCount) => ({ type: SET_TOTAL_CHARACTERS_COUNT, totalCharactersCount });
export const setFilters = (filterType, value) => ({ type: SET_FILTERS, filterType, value });
export const resetFilters = () => ({ type: RESET_FILTERS });

export const getAllCharacters = (currentPage = 1, species = '', status = '', gender = '') => (dispatch) => {
    dispatch(toggleIsLoading(true));
    charactersAPI.getAllCharacters(currentPage, species, status, gender)
        .then(response => {
            dispatch(setCharacters(response.results));
            dispatch(setTotalCharactersCount(response.info.count));
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            dispatch(toggleIsLoading(false));
        });
};

export const getCurrentCharacter = (id) => (dispatch) => {
    dispatch(setCurrentCharacter(id));
};

export const filterCharacters = (currentPage = 1, species = '', status = '', gender = '') => (dispatch) => {
    dispatch(toggleIsLoading(true));
    charactersAPI.getFilteredCharacters(currentPage, species, status, gender)
        .then(response => {
            dispatch(setCharacters(response.results));
            dispatch(setTotalCharactersCount(response.info.count));
        })
        .catch(err => {
            dispatch(setCharacters(['There is nothing here']));
            console.log(err);
        })
        .finally(() => {
            dispatch(toggleIsLoading(false));
        });
};

export const getFilters = (filterType, value) => (dispatch) => {
    dispatch(setFilters(filterType, value));
};

export const getResetFilter = () => (dispatch) => {
    dispatch(resetFilters());
};

export default charactersReducer;

