// 1. [initial] this.state
const initialState = {
    counter: 0
}


// 2. reduser
function counterReducer (state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case 'INCREMENT':
            return{ ...state, counter: state.counter + payload }
        case 'DECREMENT':
            return{...state, counter: state.counter - payload}
        default:
            return state
    }
}

export default counterReducer