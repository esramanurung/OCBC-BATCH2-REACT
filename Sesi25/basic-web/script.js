const initialState = {
    counter: 0,
  };
  
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { counter: state.counter + 1 };
      case "DECREMENT":
        return { counter: state.counter - 1 };
      default:
        return state;
    }
  };
  var store = Redux.createStore(counter);
  var el = document.getElementById("counter");
  const render = () => {
    el.innerHTML = store.getState().counter.toString();
  };
  
  render();
  store.subscribe(render);


// *Buat event listener

const incrementElement = document.getElementById('increment')
const decrementElement = document.getElementById('decrement')


// incrementElement.addEventListener('click', ()=>{
  
//   store.dispatch({type: 'INCREMENT'})
// })

// decrementElement.addEventListener('click', ()=>{
  
//   store.dispatch({type: 'DECREMENT'})  

// })

incrementElement.addEventListener('click', ()=>{
    const counter = store.getState().counter

    if(counter < 10) store.dispatch({type: 'INCREMENT'})
    else store.dispatch({type:'Reset-Counter'})
})

decrementElement.addEventListener('click', ()=>{
    const counter = store.getState().counter

    if(counter > -10) store.dispatch({type: 'DECREMENT'})
    else store.dispatch({type:'Reset-Counter'})  
  
})