import {createStore} from 'redux';
import {rootReducer} from './rootReducer';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState()

export const store = createStore(rootReducer, persistedState)

store.subscribe(throttle(() => {
        saveState({
            todoReducer: store.getState().todoReducer
        })
    }, 1000)
)