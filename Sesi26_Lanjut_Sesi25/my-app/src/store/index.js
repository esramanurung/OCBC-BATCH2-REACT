// import
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';
import counterReducer from './reducers/counterReducer';
import queueReducer from './reducers/queueReducer';

import thunk from 'redux-thunk';

// const Redux = require('redux')

// const {createStore} = Redux

// // reducer dengan combine reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    queue: queueReducer
})


// 3. createStore() => dari initialState
const middleware = applyMiddleware(thunk,logger)
const store = createStore(rootReducer, 
    compose(
        middleware
        , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// const store = createStore(reduser, middleware)

// store.subscribe() menerima sebuah function sebagai paramaternya
store.subscribe(() => console.log(store.getState()))

// store.dispatch() menerima object literal sebagai parameternya
// { type, payload } => disesuaikan dengan reducernya
// type (wajib)
// store.dispatch({ type: 'Increment', payload: 10 })

export default store


















// //import Redux from 'redux';
// import {createStore} from 'redux';
// import {applyMiddleware} from 'redux';

// import logger from 'redux-logger';

// // const Redux = require('redux')

// // const {createStore} = Redux

// //* 1. [initial] state

// const initialState = {
//     counter :0
// }

// // 2. reducer
// function  reducer (state = initialState, action){
//     const{type, payload} = action

//     switch(type){
//         case 'INCREMENT':
//             //return {counter:state.counter + 1}
//             return {...state, counter: state.counter + payload}
//         case 'DECREMENT':
//             return {...state, counter: state.counter - payload}

        
//         default:
//             return state
//     }


// }


// //3. createStore()
// const middleware = applyMiddleware(logger)
// const store = createStore(reducer,middleware)


// // const middleware = applyMiddleware(logger)
// // const store = createStore(rootReducer, middleware)

// //? store.subscribe() menerima function
// store.subscribe(() => console.log(store.getState()))
// //? store.dispatch() menerima object literal sebagai parameter
// // ? {type,payload} -> disesuaikan dgn reducernya
// // store.dispatch({type: 'INCREMENT', payload:10})

// export default store
