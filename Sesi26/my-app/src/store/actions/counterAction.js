export const incrementCounter = () =>{
    return (dispatch) =>{
        setTimeout(()=>{
            dispatch({type: 'INCREMENT', payload: 1})
        }, 10)
        // return{type: 'INCREMENT', payload: 1}
    }
}