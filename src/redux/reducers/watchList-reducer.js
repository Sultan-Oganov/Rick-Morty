
let initialState = {
    episodeList: [],
    pageSize: 20,
    totalEpisodesCount: 0,
    currentPage: 1,
};

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_EPISODE_LIST = 'SET_EPISODE_LIST';
const ADD_EPISODE = 'ADD_EPISODE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_EPISODES_COUNT = 'SET_TOTAL_EPISODES_COUNT';

const watchListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case SET_EPISODE_LIST:
            return {
                ...state,
                episodeList: action.episodeList
            };
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
        case ADD_EPISODE:
            return {
                ...state,
                episodeList: [
                    ...state.episodeList,
                    action.episode,
                ]
            }
        default:
            return state;
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const setEpisodeList = (episodeList) => ({ type: SET_EPISODE_LIST, episodeList });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalEpisodesCount = (totalEpisodesCount) => ({ type: SET_TOTAL_EPISODES_COUNT, totalEpisodesCount });
export const addEpisode = (episode) => ({ type: ADD_EPISODE, episode });

export const getEpisodeList = () => (dispatch) => {
    let list = localStorage.getItem('episodeList');
    list = JSON.parse(list);
    list != null && dispatch(setEpisodeList(list));
};

export const createNewEpisode = (event, num, episodeList) => (dispatch) => {
    event.preventDefault();
    let newEpisode = {
        id: episodeList != null ? episodeList.length : 0,
        episode: num,
        status: false,
    };
    dispatch(addEpisode(newEpisode));
    localStorage.setItem('episodeList', JSON.stringify([...episodeList, newEpisode]));
}

export const deleteEpisode = (id, episodeList) => (dispatch) => {
    let list = episodeList.filter(el => el.id != id);
    localStorage.setItem('episodeList', JSON.stringify(list));
    dispatch(setEpisodeList(list));
}

export const changeStatus = (id, episodeList) => (dispatch) => {
    let list = episodeList.map(el => {
        if (el.id == id) {
            el.status = !el.status
        };
        return el;
    });
    localStorage.setItem('episodeList', JSON.stringify(list));
    dispatch(setEpisodeList(list));
}

export default watchListReducer;

