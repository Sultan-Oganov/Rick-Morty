import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import characktersReducer from './reducers/charackters-reducer';
import locationsReducer from './reducers/locations-reducer';
import episodesReducer from './reducers/episodes-reducer';

let reducers = combineReducers({
    charackters: characktersReducer,
    locations: locationsReducer,
    episodes: episodesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store