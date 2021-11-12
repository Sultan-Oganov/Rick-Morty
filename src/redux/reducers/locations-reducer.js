import { locationsAPI } from "../../API";

let initialState = {
    isLoading: false,
    locations: [],
    currentLocation: null,
    filters: {
        name: '',
        type: '',
        dimension: '',
    },
    pageSize: 20,
    totalLocationsCount: 0,
    currentPage: 1,
    characterOfLocation: [],
};

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_LOCATIONS = 'SET_LOCATIONS';
const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';
const SET_CHARACTERS_OF_LOCATION = 'SET_CHARACTERS_OF_LOCATION';
const SET_FILTERS = 'SET_FILTERS';
const RESET_FILTERS = 'RESET_FILTERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_LOCATIONS_COUNT = 'SET_TOTAL_LOCATIONS_COUNT';


const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            }
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.id
            };
        case SET_CHARACTERS_OF_LOCATION:
            return {
                ...state,
                characterOfLocation: action.characterOfLocation
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_LOCATIONS_COUNT:
            return {
                ...state,
                totalLocationsCount: action.totalLocationsCount
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
                    name: '',
                    type: '',
                    dimension: '',
                }
            };
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const setLocations = (locations) => ({ type: SET_LOCATIONS, locations });
export const setCurrentlocation = (id) => ({ type: SET_CURRENT_LOCATION, id });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalLocationsCount = (totalLocationsCount) => ({ type: SET_TOTAL_LOCATIONS_COUNT, totalLocationsCount });
export const setFilters = (filterType, value) => ({ type: SET_FILTERS, filterType, value });
export const resetFilters = () => ({ type: RESET_FILTERS });
export const setCharactersOfLocation = (characterOfLocation) => ({ type: SET_CHARACTERS_OF_LOCATION, characterOfLocation });


export const getAllLocations = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    locationsAPI.getAllLocations()
        .then(response => {
            dispatch(setLocations(response.results))
            dispatch(setTotalLocationsCount(response.info.count))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(toggleIsLoading(false))
        })
}

export const getCurrentLocation = (id) => (dispatch) => {
    dispatch(setCurrentlocation(id));
};

export const getCharactersOfLocation = (characters = '') => (dispatch) => {
    dispatch(toggleIsLoading(true))
    locationsAPI.getCharactersOfLocation(characters)
        .then(response => {
            dispatch(setCharactersOfLocation(response))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(toggleIsLoading(false))
        })
}

export const getFilteredLocations = (currentPage = 1, name = '', type = '', dimension = '') => (dispatch) => {
    dispatch(toggleIsLoading(true));
    locationsAPI.getFilteredLocations(currentPage, name, type, dimension)
        .then(response => {
            dispatch(setTotalLocationsCount(response.info.count));
            dispatch(setLocations(response.results));
        })
        .catch(err => {
            dispatch(setLocations([{ name: 'There is nothing here' }]));
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

export default locationsReducer;