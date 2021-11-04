import { charactersAPI } from './../../API/index';

let initialState = {
    charackters: [],
    currentCharackter: null
}

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_CHARACKTERS = 'SET_CHARACKTERS';
const SET_CURRENT_CHARACKTER = 'SET_CURRENT_CHARACKTER';


const characktersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_CHARACKTERS:
            return {
                ...state,
                charackters: action.charackters
            }
        case SET_CURRENT_CHARACKTER:
            return {
                ...state,
                currentCharackter: action.id
            }
        default:
            return state
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
export const setCharackters = (charackters) => ({ type: SET_CHARACKTERS, charackters })
export const setCurrentCharackter = (id) => ({ type: SET_CURRENT_CHARACKTER, id })

export const getAllCharackters = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    charactersAPI.getAllCharacters()
        .then(response => {
            dispatch(toggleIsLoading(false))
            dispatch(setCharackters(response.data))
        })
}

export const getCurrentCharackter = (id) => (dispatch) => {
    console.log(id)
    dispatch(setCurrentCharackter(id))
}

export default characktersReducer;

