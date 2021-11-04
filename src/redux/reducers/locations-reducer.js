import { locationsAPI } from "../../API";

let initialState = {
    locations: []
}

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_LOCATIONS = 'SET_LOCATIONS';


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
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setLocations = (locations) => ({ type: SET_LOCATIONS, locations })

export const getAllLocations = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    locationsAPI.getAllLocations()
        .then(response => {
            dispatch(toggleIsLoading(false))
            dispatch(setLocations(response.data))
        })
}

export default locationsReducer;