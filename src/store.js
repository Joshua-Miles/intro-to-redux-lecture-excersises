import { createStore } from 'redux'

const _ = undefined

const initialState = {
    counter: 0
}

const reducer = ( state, action ) => {
    switch(action.type){
        case 'INCREMENT_COUNTER':
            return _
        break;
    }
    return state
}

export const store = createStore(
    _, 
    _,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

 store.dispatch({ type: _ })
 store.dispatch({ type: _ })