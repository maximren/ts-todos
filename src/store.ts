import { createStore, combineReducers } from 'redux';

import postReducer from './reducers/postReducer';

const initialState = {}

const rootReducer = combineReducers({
    postReducer
})

const store = createStore(
    rootReducer,
    initialState
)

export default store;