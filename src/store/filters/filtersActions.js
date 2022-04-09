import {SET_FILTER} from './filtersConst';

export const setFilterAC = (filter) => {
    return {
        type: SET_FILTER,
        filter,
    }
}