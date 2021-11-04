import { episodesAPI } from "../../API";

let initialState = {
    episodes: []
}

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_EPISODES = 'SET_EPISODES';


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
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setEpisodes = (episodes) => ({ type: SET_EPISODES, episodes })

export const getAllEpisodes = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    episodesAPI.getAllEpisodes()
        .then(response => {
            dispatch(toggleIsLoading(false))
            dispatch(setEpisodes(response.data))
        })
}

export default episodesReducer;