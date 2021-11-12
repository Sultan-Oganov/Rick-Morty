import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import charactersReducer from './reducers/characters-reducer';
import locationsReducer from './reducers/locations-reducer';
import episodesReducer from './reducers/episodes-reducer';
import watchListReducer from './reducers/watchList-reducer';

let reducers = combineReducers({
    characters: charactersReducer,
    locations: locationsReducer,
    episodes: episodesReducer,
    watchList: watchListReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store