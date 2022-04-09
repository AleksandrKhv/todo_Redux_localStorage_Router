import {combineReducers} from 'redux';

import {todoReducer} from './todos/todosReducers'
//import {filtersReducers} from './filters/filtersReducers';

export const rootReducer = combineReducers({
    todoReducer,
    //filtersReducers
})