//import Redux from 'redux';
import {createStore} from 'redux';

// const Redux = require('redux')

// const {createStore} = Redux

//* 1. [initial] state

const initialState = {
    counter :0
}

// 2. reducer
function  reducer (state = initialState, action){
    const{type, payload} = action

    switch(type){
        case 'INCREMENT':
            //return {counter:state.counter + 1}
            return {...state, counter: state.counter + payload}
        case 'DECREMENT':
            return {...state, counter: state.counter - payload}

        
        default:
            return state
    }


}


//3. createStore()
const store = createStore(reducer)
//? store.subscribe() menerima function
store.subscribe(() => console.log(store.getState()))
//? store.dispatch() menerima object literal sebagai parameter
// ? {type,payload} -> disesuaikan dgn reducernya
// store.dispatch({type: 'INCREMENT', payload:10})

export default store
