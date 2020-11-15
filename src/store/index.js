import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducers/dataReducer'
import authReducer from './reducers/authReducer'

const reducer = combineReducers ({
    dataReducer,
    authReducer
})

const store = createStore (reducer, applyMiddleware(thunk))

export default store