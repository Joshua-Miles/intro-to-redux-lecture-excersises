import { createStore } from 'redux'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT_COUNT':
            state.count = state.count + 1
        break;
    }
    return state
}

export const store = createStore(reducer, initialState)