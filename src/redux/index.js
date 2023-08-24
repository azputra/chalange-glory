import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

// reducers
import globalReducer from './reducers/global'
import listGiftsReducer from './reducers/listGifts'

const reducers = combineReducers({
    globalReducer,
    gifts: listGiftsReducer,
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))
export default store