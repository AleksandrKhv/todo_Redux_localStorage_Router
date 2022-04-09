
import {SET_FILTER} from './filtersConst';

export const filtersReducers = (state = 'all', action)=> {
    switch (action.type) {
        case SET_FILTER: {
            return action.filter
        } default: {
            return state
        }
    }
}